import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [pokemon, setPokemons] = useState([])

  function findThePokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => setPokemons(response.data.results))
    

  }

  return (
    <div className="App">
   <button className='button' onClick={findThePokemons}>Fetch pokemon Data</button>
   {pokemon.map((pokemon,i) => <p key={i}>{pokemon.name}</p>)}
    </div>
  );
}

export default App;
