import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register Route");
});

router.post("/login", (req, res) => {
  res.send("Login Route");
});

export default router;