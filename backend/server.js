const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });

const { connectDB } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Process Error Protection
process.on("uncaughtException", (err) => {
  console.error("[Uncaught Exception]", err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Unhandled Rejection]", reason);
});

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[API Request] ${req.method} ${req.url}`);
  next();
});

// Root Landing Page
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Welcome to PickUP Backend API Service!",
    status: "Operational",
    endpoints: {
      health: "/api/health",
      auth: {
        signUp: "POST /api/auth/signup",
        signIn: "POST /api/auth/signin",
        profile: "GET /api/auth/me",
      },
      semesters: "GET /api/semesters",
      contact: "POST /api/contact",
    },
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "PickUP Backend Service is running operational.",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/semesters", require("./routes/semesterRoutes"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("[Unhandled Error]", err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 PickUP Backend Server running on port ${PORT}`);
  console.log(`📡 Healthcheck: http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});
