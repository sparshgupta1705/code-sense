import { createSourceFile } from "../services/compilerService.js";
import {
  compileCode,
  executeCode,
  cleanup,
} from "../compiler/index.js";

export const runCode = async (req, res) => {
  const { code, input = "" } = req.body;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Code is required",
    });
  }

  let cppPath;
  let exePath;

  try {
    const files = createSourceFile(code);

    cppPath = files.cppPath;
    exePath = files.exePath;

    await compileCode(cppPath, exePath);

    const result = await executeCode(exePath, input);

    cleanup(cppPath, exePath);

    return res.status(200).json({
      success: true,
      output: result.output,
      executionTime: result.executionTime,
    });

  } catch (error) {

    if (cppPath && exePath) {
      cleanup(cppPath, exePath);
    }

    return res.status(400).json({
      success: false,
      error,
    });
  }
};