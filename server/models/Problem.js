import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    companies: [String],

    frequency: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    description: {
      type: String,
      required: true,
    },

    constraints: {
      type: String,
      default: "",
    },

    examples: [
      {
        input: String,
        output: String,
        explanation: String,
      },
    ],

    starterCode: {
      type: String,
      default: "",
    },

    publicTestCases: [
  {
    input: String,
    expectedOutput: String,
  },
],

hiddenTestCases: [
  {
    input: String,
    expectedOutput: String,
  },
],

    acceptedCount: {
      type: Number,
      default: 0,
    },

    submissionCount: {
      type: Number,
      default: 0,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Problem", problemSchema);