import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm(props) {

  const [name, setName] = useState('');

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((res) => {
      props.setCards(res.data.results);
    })
  }, [name]);

  
  const handleChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <section className="search-form">
     <h1>Filter through the characters:</h1>
      <input
        type="text"
        placeholder="Start typing here to see the magic happen!"
        onChange={handleChange}
        value={name}
      />
      {/* {filteredChars.map(charName => (
        <div key={charName} style={{ char: charName }}>
          {charName}
        </div>
      ))} */}
    </section>
  );
}
