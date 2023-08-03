const noteServices = require("../services/noteServices");

// Create a new note
exports.createNewNote = async (req, res, next) => {
  try {
    console.log("ASDASDcreateNewNote");
    await noteServices.createNewNote(req, res, next);
  } catch (error) {
    next(error);
  }
};
