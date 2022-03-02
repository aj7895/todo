const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// REGISTER USER
router.post("/register", userController.registerUser);

// LOGIN
router.post("/login", userController.loginUser);

// GET ALL USERS
router.get("/getallusers", userController.getAllUsers);

// DELETE A USER
router.post("/deleteuser", userController.deleteUser);

// EDIT USER
router.post("/edituser", userController.editUser);

module.exports = router;
