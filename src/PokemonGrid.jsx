// src/PokemonGrid.jsx

import PokemonCard from "./PokemonsCard";

// Este componente recebe o array de pokemons via props.
function PokemonGrid(props) {
  return (
    <div className="pokemon-grid">
      {/* Eu uso .map() para transformar cada objeto 'pokemon' em um componente <PokemonCard /> */}
      {props.pokemons.map(pokemon => (
        // O nome do pokemon nesta lista é único, então posso usá-lo como key.
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;