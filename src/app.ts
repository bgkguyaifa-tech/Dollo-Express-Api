import express from "express";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasks";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Dollo Express API is running"
  });
});

// Tasks routes
app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});