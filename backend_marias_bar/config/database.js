const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://franpercivaldi:94niXU6CnZ049Qkl@cluster0.8difmo0.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
