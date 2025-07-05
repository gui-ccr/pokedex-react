// src/PokemonCard.jsx

// Este componente recebe um objeto 'pokemon' como prop.
function PokemonCard(props) {
  // A API não nos dá o ID do Pokémon diretamente, mas podemos extraí-lo da URL.
  // A URL é algo como: "https://pokeapi.co/api/v2/pokemon/1/"
  // O .split('/') quebra a string em um array usando a '/' como separador.
  // O ID estará na 6ª posição do array resultante.
  const pokemonId = props.pokemon.url.split('/')[6];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={`Imagem do ${props.pokemon.name}`} />
      <p>{props.pokemon.name}</p>
    </div>
  );
}

export default PokemonCard;