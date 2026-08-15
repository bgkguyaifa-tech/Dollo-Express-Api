import express from "express";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasks";
import authRoutes from "./routes/auth";
import { authenticateUser } from "./middleware/auth";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Dollo Express API is running",
  });
});

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api/tasks", authenticateUser, tasksRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});