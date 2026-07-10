import { exec } from "child_process";

const compileCode = (cppPath, exePath) => {
  return new Promise((resolve, reject) => {
    const command = `g++ "${cppPath}" -o "${exePath}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(stderr || error.message);
      }

      resolve();
    });
  });
};

export default compileCode;