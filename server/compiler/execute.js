import { execFile } from "child_process";

const executeCode = (exePath, input = "") => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const child = execFile(exePath, (error, stdout, stderr) => {
      const executionTime = Date.now() - startTime;

      if (error) {
        return reject({
          error: stderr || error.message,
          executionTime,
        });
      }

      resolve({
        output: stdout.trim(),
        executionTime,
      });
    });

    if (input) {
      child.stdin.write(input);
    }

    child.stdin.end();
  });
};

export default executeCode;