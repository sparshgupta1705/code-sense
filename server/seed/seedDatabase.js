import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Problem from "../models/Problem.js";
import problems from "./problems.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("🗑 Clearing existing problems...");
    await Problem.deleteMany();

    console.log("📥 Inserting problems...");
    await Problem.insertMany(problems);

    console.log("✅ Database seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed");
    console.error(error);

    process.exit(1);
  }
};

seedDatabase();