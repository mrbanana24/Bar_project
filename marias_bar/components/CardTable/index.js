"use client";
import React from "react";
import { useState } from "react";
import DataPicker from "../../components/DataPicker";
import styles from "./CardTable.module.css";
import BasicTimePicker from "../../components/TimePicker";

const CardTable = () => {
  const [state, setState] = useState({
    mesa: "",
    nombre: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mesa} placeholder="Numero de mesa">
        <p>Numero de mesa:</p>
        <input
          type="number"
          name="mesa"
          value={state.mesa}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className={styles.nombre} placeholder="Reservado a nombre de:">
        <p>Reservado por:</p>
        <input
          type="text"
          name="nombre"
          value={state.nombre}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <DataPicker label="Fecha de reserva" />
      <BasicTimePicker label="Hora de reserva" />
    </div>
  );
};

export default CardTable;
