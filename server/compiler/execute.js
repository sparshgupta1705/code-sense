import { exec } from "child_process";

const executeCode = (executableFile) => {
  return new Promise((resolve, reject) => {
    exec(`"${executableFile}"`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
};

export default executeCode;