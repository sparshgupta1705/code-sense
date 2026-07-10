import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    solvedProblems: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 0,
    },

    submissions: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Submission",
  },
],

favoriteProblems: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
  },
],

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);