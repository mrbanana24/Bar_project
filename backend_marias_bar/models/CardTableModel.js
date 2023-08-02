const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardTableSchema = new Schema({
  mesa: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("CardTable", cardTableSchema);
