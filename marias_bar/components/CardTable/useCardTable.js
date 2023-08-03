"use client";
import { useState } from "react";
import axios from "axios";

const useNote = (noteData) => {
  const [mesaState, setMesaState] = useState(noteData.mesa);
  const [nombreState, setNombreState] = useState(noteData.nombre);

  const handleMesa = (e) => {
    setMesaState(e.target.value);
  };

  const handleMesaBlur = (id, e) => {
    axios.patch(
      "http://localhost:8000/notes/updatenote",
      { mesa: e.target.value },
      { params: { id } }
    );
  };

  const handleNombre = (e) => {
    setNombreState(e.target.value);
  };

  const handleNombreBlur = (id, e) => {
    axios.patch(
      "http://localhost:8000/notes/updatenote",
      { nombre: e.target.value },
      { params: { id } }
    );
  };

  return {
    mesaState,
    nombreState,
    handleMesa,
    handleMesaBlur,
    handleNombre,
    handleNombreBlur,
  };
};

export default useNote;
