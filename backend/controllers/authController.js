const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { isDbConnected } = require("../config/db");

// Fallback memory store if DB is offline
const memoryUsers = [];

const generateToken = (id, email, fullName) => {
  return jwt.sign(
    { id, email, fullName },
    process.env.JWT_SECRET || "pickup_super_secret_jwt_key_2026_change_in_production",
    { expiresIn: "7d" }
  );
};

// @desc Register User
// @route POST /api/auth/signup
const signUp = async (req, res) => {
  try {
    const { fullName, email, password, semester } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: "Please fill in all required fields" });
    }

    if (isDbConnected()) {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ success: false, message: "Account with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        semester: semester || "Semester 5",
      });

      const token = generateToken(user._id, user.email, user.fullName);
      return res.status(201).json({
        success: true,
        message: "Account created successfully!",
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          semester: user.semester,
        },
      });
    } else {
      // Fallback Mode
      const userExists = memoryUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
      if (userExists) {
        return res.status(400).json({ success: false, message: "Account with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        id: "mem_" + Date.now(),
        fullName,
        email,
        password: hashedPassword,
        semester: semester || "Semester 5",
      };
      memoryUsers.push(newUser);

      const token = generateToken(newUser.id, newUser.email, newUser.fullName);
      return res.status(201).json({
        success: true,
        message: "Account created successfully!",
        token,
        user: {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email,
          semester: newUser.semester,
        },
      });
    }
  } catch (error) {
    console.error("SignUp error:", error);
    return res.status(500).json({ success: false, message: "Server error during registration" });
  }
};

// @desc Login User
// @route POST /api/auth/signin
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please enter both email and password" });
    }

    if (isDbConnected()) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }

      const token = generateToken(user._id, user.email, user.fullName);
      return res.json({
        success: true,
        message: "Signed in successfully!",
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          semester: user.semester,
        },
      });
    } else {
      // Fallback Mode
      const user = memoryUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }

      const token = generateToken(user.id, user.email, user.fullName);
      return res.json({
        success: true,
        message: "Signed in successfully!",
        token,
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          semester: user.semester,
        },
      });
    }
  } catch (error) {
    console.error("SignIn error:", error);
    return res.status(500).json({ success: false, message: "Server error during sign in" });
  }
};

// @desc Get current user
// @route GET /api/auth/me
const getMe = async (req, res) => {
  try {
    return res.json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { signUp, signIn, getMe };
