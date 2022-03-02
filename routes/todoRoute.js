const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController.js");

// creating post
router.post("/create", todoController.createTodo);

// Todo by user
router.post("/gettodobyuserid", todoController.getTodoByUserId);

// get all TODO
router.get("/getalltodo", todoController.getAllTodo);

// get todo by id
router.post("/gettodobyid", todoController.getTodoById);

// DELETE TODO BY ID
router.post("/deletetodobyid", todoController.deleteTodoById);

//  EDIT TODO
router.post("/edittodobyid", todoController.editTodoById);

// UPDATE STATUS OF TODO
router.post("/updatestatusbyid", todoController.updateStatus);

// DELETE ALL TODO BY USER
router.post("/deletealltodo", todoController.deleteAllTodo);

// DELETE ALL
router.post("/deleteall", todoController.deleteAll);

module.exports = router;
