import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {

submitSolution

}

from "../controllers/submissionController.js";

const router=express.Router();

router.post(

"/submit",

authMiddleware,

submitSolution

);

export default router;