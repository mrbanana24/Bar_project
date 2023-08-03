const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardTableSchema = new Schema({
  mesa: {
    type: Number,
    required: false,
  },
  nombre: {
    type: String,
    required: false,
  },
  fecha: {
    type: Date,
    required: false,
  },
  hora: {
    type: Date,
    required: false,
  },
});

const CardTable = mongoose.model("CardTable", cardTableSchema);

module.exports = CardTable;
