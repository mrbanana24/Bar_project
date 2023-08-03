"use client";
import CardTable from "../../components/CardTable";
import { useState, useEffect } from "react";
import { createCard, getAllCards, updateCard } from "../../utils/api";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards(setCards);
  }, []);

  return (
    <div>
      <button onClick={() => createCard(cards, setCards)}>Add Card</button>
      {cards.map((card) => (
        <CardTable
          cardData={card}
          key={card._id}
          onBlur={(data) => updateCard(card._id, data)}
        />
      ))}
    </div>
  );
}
