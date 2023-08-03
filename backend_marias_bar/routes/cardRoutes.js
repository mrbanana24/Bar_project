const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteControllers");

// Create a new note
router.post("/newnote", noteController.createNewNote);

module.exports = router;
