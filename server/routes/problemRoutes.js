import express from "express";

import {
  createProblem,
  getProblems,
  getProblem,
} from "../controllers/problemController.js";

const router = express.Router();

router.get("/", getProblems);

router.get("/:id", getProblem);

router.post("/", createProblem);

export default router;