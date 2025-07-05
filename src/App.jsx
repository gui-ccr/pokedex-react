// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import PokemonGrid from './PokemonGrid.jsx'; // 1. Importe o novo componente da grade.

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const dados = await resposta.json();
        setPokemons(dados.results);
      } catch (erro) {
        console.error("Erro ao buscar Pokémons:", erro);
      }
    }
    buscarPokemons();
  }, []);

  // Agora podemos remover o console.log, pois veremos o resultado na tela!

  return (
    <div className="app-container">
      <h1>Pokédex</h1>
      
      {/* 2. Em vez do comentário, renderize o PokemonGrid, passando a lista como prop. */}
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default App;