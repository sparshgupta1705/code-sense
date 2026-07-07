import { createSourceFile } from "../services/compilerService.js";
import {
  compileCode,
  executeCode,
  cleanup,
} from "../compiler/index.js";

export const runCompiler = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required",
      });
    }

    // Create temporary source & executable paths
    const { cppPath, exePath } = createSourceFile(code);

    // Compile
    await compileCode(cppPath, exePath);

    // Execute
    const output = await executeCode(exePath);

    // Cleanup
    cleanup(cppPath, exePath);

    return res.status(200).json({
      success: true,
      output,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.toString(),
    });
  }
};