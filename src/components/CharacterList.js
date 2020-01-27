import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log(res.data)
      setCards(res.data);
    })
    .catch('There was an error.')
  }, []);

  return (
    <section className="character-list">
      <h2>{cards && cards.map(card => {
        return (
          <CharacterCard 
            key={card.id}
          />
        )
      })}</h2>
    </section>
  );
}
