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

// Update a note
const updateNote = async (id, data) => {
  const newData = {};
  const { mesa, nombre, fecha, hora } = data;
  if (mesa !== undefined) newData.mesa = mesa;
  if (nombre !== undefined) newData.nombre = nombre;
  if (fecha !== undefined) newData.fecha = fecha;
  if (hora !== undefined) newData.hora = hora;

  try {
    const updatedNote = await CardTable.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return updatedNote;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewNote,
  getAllNotes,
  updateNote,
};
