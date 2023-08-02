const Note = require("../models/CardTableModel");
const noteServices = require("../services/noteServices");

// Get all notes
const getNotes = async (req, res, next) => {
  try {
    const notes = await noteServices.getNotes({});
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

// Create a note
const createNote = async (req, res, next) => {
  try {
    const newNote = await noteServices.createNote();
    res.status(200).json(newNote);
  } catch (error) {
    next(error);
  }
};

// Delete a note
const delteNote = async (req, res, next) => {
  const { id } = req.query;
  try {
    const note = await noteServices.deleteNote(id);
    res.status(200).json(note);
  } catch {
    next(error);
  }
};

// Update a note
const updateNote = async (req, res, next) => {
  const { id } = req.query;
  const { mesa, nombre, fecha, hora } = req.body;

  try {
    const note = await noteServices.updateNote(id, {
      mesa,
      nombre,
      fecha,
      hora,
    });
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNotes,
  createNote,
  delteNote,
  updateNote,
};
