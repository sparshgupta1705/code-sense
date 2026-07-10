import Submission from "../models/Submission.js";
import Problem from "../models/Problem.js";
import { judgeSubmission } from "../services/judgeService.js";

export const submitSolution = async (req, res) => {
  try {
    const { problemId, code } = req.body;

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }

    const result = await judgeSubmission(
      code,
      problem.testCases
    );

    const submission = await Submission.create({
      user: req.userId,
      problem: problemId,
      code,
      verdict: result.verdict,
      executionTime: result.executionTime || 0,
      passedTestCases: result.passed || 0,
      totalTestCases: result.total || 0,
    });

    res.json({
      success: true,
      submission,
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};