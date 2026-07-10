import { execFile } from "child_process";

const executeCode = (exePath, input = "") => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const child = execFile(exePath, (error, stdout, stderr) => {
      const executionTime = Date.now() - start;

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

    child.stdin.write(input);
    child.stdin.end();
  });
};

export default executeCode;