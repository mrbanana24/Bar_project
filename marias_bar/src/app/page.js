"use client";
import React from "react";
import CardTable from "../../components/CardTable";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);

  const createCard = async (cards) => {
    console.log("CRREANDO CARTA EN FRONTEND");
    try {
      const res = await axios.post("http://localhost:8000/notes/newnote");
      if (res.status === 200) {
        setCards((prev) => [...prev, res.data]);
      }
    } catch (error) {
      console.log("error in creating note:", error);
    }
  };

  return (
    <div>
      <button onClick={() => createCard(cards)}>Add Card</button>
    </div>
  );
}
