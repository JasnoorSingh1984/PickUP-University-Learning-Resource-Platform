const Contact = require("../models/Contact");
const { isDbConnected } = require("../config/db");

const memoryContacts = [];

// @desc Submit contact form / resource suggestion
// @route POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, message, userId } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Please provide name, email, and message." });
    }

    if (isDbConnected()) {
      const newContact = await Contact.create({ name, email, message, userId: userId || null });
      console.log(`[MongoDB] Saved contact message from ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: newContact,
      });
    } else {
      const newContact = {
        id: "contact_" + Date.now(),
        name,
        email,
        message,
        userId: userId || null,
        createdAt: new Date(),
      };
      memoryContacts.push(newContact);
      console.log(`[MemoryStore] Stored contact message from ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: newContact,
      });
    }
  } catch (error) {
    console.error("SubmitContact error:", error);
    return res.status(500).json({ success: false, message: "Server error handling contact request" });
  }
};

// @desc Get all contact messages (Admin)
// @route GET /api/contact
const getContacts = async (req, res) => {
  try {
    if (isDbConnected()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, contacts });
    } else {
      return res.json({ success: true, contacts: memoryContacts });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { submitContact, getContacts };
