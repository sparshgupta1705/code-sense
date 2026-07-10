import fs from "fs";

const cleanup = (...files) => {
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    } catch (err) {
      console.log(`Cleanup failed for ${file}`);
    }
  }
};

export default cleanup;