"use client";
import CardTable from "../../components/CardTable";
import { useState, useEffect } from "react";
import { createCard, getAllCards } from "../../utils/api";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards(setCards);
  }, []);

  return (
    <div>
      <button onClick={() => createCard(cards, setCards)}>Add Card</button>
      {cards.map((card) => (
        <CardTable key={card._id} />
      ))}
    </div>
  );
}
