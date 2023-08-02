const Note = require("../models/CardTableModel");

// Service Get notes
const getNotes = async (filter) => {
  return await Note.find(filter);
};

// Create a new note
const createNote = async () => {
  try {
    const newNote = new Note({
      mesa: 0,
      nombre: "",
      fecha: Date.now(),
      hora: Date.now(),
    });
    return await newNote.save();
  } catch (error) {
    console.log(error);
  }
};

// Delete a note
const deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};

// Update a note
const updateNote = async (id, note) => {
  const newData = {};
  const { mesa, nombre, fecha, hora } = note;

  if (mesa) newData.mesa = mesa;
  if (nombre) newData.nombre = nombre;
  if (fecha) newData.fecha = fecha;
  if (hora) newData.hora = hora;

  return await Note.findByIdAndUpdate(id, newData);
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
};
