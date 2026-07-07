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

    tags: [
      {
        type: String,
      },
    ],

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

    testCases: [
      {
        input: String,
        expectedOutput: String,
        isHidden: {
          type: Boolean,
          default: false,
        },
      },
    ],

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