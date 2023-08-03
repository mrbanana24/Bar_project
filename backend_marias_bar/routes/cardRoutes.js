const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteControllers");

// Create a new note
router.post("/newnote", noteController.createNewNote);

// Get all notes
router.get("/", noteController.getAllNotes);

// Update a note
router.patch("/updatenote/", noteController.updateNote);

module.exports = router;
