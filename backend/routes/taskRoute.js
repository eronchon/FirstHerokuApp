const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask); // adding params to your URL
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.patch("/:id", updateTask); // changing just 1 field?

module.exports = router;
