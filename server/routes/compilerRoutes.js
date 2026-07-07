import express from "express";
import { runCompiler } from "../controllers/compilerController.js";

const router = express.Router();

router.post("/run", runCompiler);

export default router;