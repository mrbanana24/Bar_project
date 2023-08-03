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
    await noteServices.getAllNotes(req, res, next);
  } catch (error) {
    next(error);
  }
};

// Update a note
exports.updateNote = async (req, res, next) => {
  const { id } = req.query;
  const { mesa, nombre, fecha, hora } = req.body;
  try {
    console.log("ADASDA");
    await noteServices.updateNote(id, {
      mesa,
      nombre,
      fecha,
      hora,
    });
  } catch (error) {
    next(error);
  }
};
