import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Problems");
});

router.post("/", (req, res) => {
  res.send("Create Problem");
});

router.get("/:id", (req, res) => {
  res.send("Single Problem");
});

router.put("/:id", (req, res) => {
  res.send("Update Problem");
});

router.delete("/:id", (req, res) => {
  res.send("Delete Problem");
});

export default router;