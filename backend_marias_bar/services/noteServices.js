const CardTable = require("../models/CardTableModel");

// Create a new note
const createNewNote = async (req, res, next) => {
  // create a empty note
  const note = new CardTable({
    mesa: 0,
    nombre: "",
    fecha: Date.now(),
    hora: Date.now(),
  });

  try {
    // save the note
    const newNote = await note.save();
    res.json(newNote);
  } catch (error) {
    next(error);
  }
};

// Get All Notes
const getAllNotes = async (req, res, next) => {
  try {
    const notes = await CardTable.find();
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewNote,
  getAllNotes,
};
