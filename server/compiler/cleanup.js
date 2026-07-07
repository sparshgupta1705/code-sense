import fs from "fs";

const cleanup = (...files) => {
  files.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  });
};

export default cleanup;