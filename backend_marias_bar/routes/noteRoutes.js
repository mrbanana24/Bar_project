const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteControllers");

// Get notes
router.get("/", noteController.getNotes);

// Create a note
router.post("/newnote", noteController.createNote);

// Delete a note
router.delete("/deletenote", noteController.deleteNote);

// Update a note
router.patch("/updatenote", noteController.updateNote);

module.exports = router;
