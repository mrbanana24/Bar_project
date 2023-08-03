const noteServices = require("../services/noteServices");

// Create a new note
exports.createNewNote = async (req, res, next) => {
  try {
    await noteServices.createNewNote(req, res, next);
  } catch (error) {
    next(error);
  }
};

// Get all notes
exports.getAllNotes = async (req, res, next) => {
  try {
    console.log("getAllNotesASASD");
    await noteServices.getAllNotes(req, res, next);
  } catch (error) {
    next(error);
  }
};
