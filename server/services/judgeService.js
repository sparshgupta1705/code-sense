import { createSourceFile } from "./compilerService.js";
import {
  compileCode,
  executeCode,
  cleanup,
} from "../compiler/index.js";

const normalize = (str) => str.trim().replace(/\r\n/g, "\n");

export const judgeSubmission = async (code, testCases) => {
  const { cppPath, exePath } = createSourceFile(code);

  try {
    // Compile
    await compileCode(cppPath, exePath);

    let passed = 0;

    for (const testCase of testCases) {
      const result = await executeCode(
        exePath,
        testCase.input
      );

      if (
        normalize(result.output) ===
        normalize(testCase.expectedOutput)
      ) {
        passed++;
      } else {
        cleanup(cppPath, exePath);

        return {
          verdict: "Wrong Answer",
          passed,
          total: testCases.length,
          executionTime: result.executionTime,
        };
      }
    }

    cleanup(cppPath, exePath);

    return {
      verdict: "Accepted",
      passed,
      total: testCases.length,
    };

  } catch (error) {
    cleanup(cppPath, exePath);

    return {
      verdict: "Compilation Error",
      error,
    };
  }
};