import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import problemRoutes from "./routes/problemRoutes.js";
import compilerRoutes from "./routes/compilerRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/problems", problemRoutes);

app.use("/api/compiler", compilerRoutes);

app.use(
  "/api/submissions",
  submissionRoutes
);

app.get("/", (req, res) => {
    res.send("CodeSense AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});