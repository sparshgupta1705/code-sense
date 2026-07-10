import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },

    language: {
      type: String,
      default: "cpp",
    },

    code: {
      type: String,
      required: true,
    },

    verdict: {
      type: String,
      enum: [
        "Accepted",
        "Wrong Answer",
        "Compilation Error",
        "Runtime Error",
      ],
      required: true,
    },

    executionTime: Number,

    memoryUsed: Number,

    passedTestCases: Number,

    totalTestCases: Number,

    compilerOutput: String,

    aiReviewed: {
      type: Boolean,
      default: false,
    },

    aiScore: {
      type: Number,
      default: null,
    },

    aiFeedback: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Submission", submissionSchema);