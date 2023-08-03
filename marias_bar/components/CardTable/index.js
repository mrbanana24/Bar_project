"use client";
import React from "react";
import DataPicker from "../../components/DataPicker";
import styles from "./CardTable.module.css";
import BasicTimePicker from "../../components/TimePicker";
import useNote from "./useCardTable";

const CardTable = ({ cardData }) => {
  const {
    mesaState,
    nombreState,
    handleMesa,
    handleMesaBlur,
    handleNombre,
    handleNombreBlur,
  } = useNote(cardData);

  return (
    <div className={styles.container}>
      <div className={styles.mesa} placeholder="Numero de mesa">
        <p>Numero de mesa:</p>
        <input
          type="number"
          name="mesa"
          value={mesaState}
          onChange={(e) => handleMesa(e)}
          onBlur={(e) => handleMesaBlur(cardData._id, e)}
        />
      </div>
      <div className={styles.nombre} placeholder="Reservado a nombre de:">
        <p>Reservado por:</p>
        <input
          type="text"
          name="nombre"
          value={nombreState}
          onChange={(e) => handleNombre(e)}
          onBlur={(e) => handleNombreBlur(cardData._id, e)}
        />
      </div>
      <DataPicker label="Fecha de reserva" />
      <BasicTimePicker label="Hora de reserva" />
    </div>
  );
};

export default CardTable;
