"use client";
import { TimePicker } from "@mui/x-date-pickers";
import React from "react";
import DataPicker from "../../components/DataPicker";
import styles from "./CardTable.module.css";
import BasicTimePicker from "../../components/TimePicker";

const CardTable = ({ mesa, nombre }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mesa} placeholder="Numero de mesa">
        <p>Numero de Mesa: {mesa}</p>
      </div>
      <div className={styles.nombre} placeholder="Reservado a nombre de:">
        <p>Reservado por: {nombre}</p>
      </div>
      <DataPicker label="Fecha de reserva" />
      <BasicTimePicker label="Hora de reserva" />
    </div>
  );
};

export default CardTable;
