import { exec } from "child_process";

const compileCode = (sourceFile, outputFile) => {
  return new Promise((resolve, reject) => {
    const command = `g++ "${sourceFile}" -o "${outputFile}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
};

export default compileCode;