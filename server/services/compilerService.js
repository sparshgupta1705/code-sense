import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const TEMP_DIR = path.join(process.cwd(), "compiler", "temp");

export const createSourceFile = (code) => {
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  const id = randomUUID();

  const cppPath = path.join(TEMP_DIR, `${id}.cpp`);
  const exePath = path.join(TEMP_DIR, `${id}.exe`);

  fs.writeFileSync(cppPath, code);

  return {
    cppPath,
    exePath,
  };
};
