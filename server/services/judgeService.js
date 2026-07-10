import { createSourceFile } from "./compilerService.js";
import {
  compileCode,
  executeCode,
  cleanup,
} from "../compiler/index.js";

const normalize = (text) =>
  text.trim().replace(/\r\n/g, "\n");

export const judgeSubmission = async (
  code,
  publicTests,
  hiddenTests
) => {

  const { cppPath, exePath } = createSourceFile(code);

  try {

    await compileCode(cppPath, exePath);

    const allTests = [
      ...publicTests,
      ...hiddenTests,
    ];

    let passed = 0;

    let totalExecutionTime = 0;

    for (const test of allTests) {

      const result = await executeCode(
        exePath,
        test.input
      );

      totalExecutionTime += result.executionTime;

      if (
        normalize(result.output) ===
        normalize(test.expectedOutput)
      ) {

        passed++;

      } else {

        cleanup(cppPath, exePath);

        return {

          verdict: "Wrong Answer",

          passed,

          total: allTests.length,

          executionTime: totalExecutionTime,

          compilerOutput: result.output

        };

      }

    }

    cleanup(cppPath, exePath);

    return {

      verdict: "Accepted",

      passed,

      total: allTests.length,

      executionTime: totalExecutionTime,

      compilerOutput: ""

    };

  }

  catch (err) {

    cleanup(cppPath, exePath);

    return {

      verdict: "Compilation Error",

      compilerOutput: err.toString(),

      passed:0,

      total:0,

      executionTime:0

    };

  }

};