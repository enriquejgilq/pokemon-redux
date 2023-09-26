import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((item) => (
        <PokemonCard
          name={item.name}
          key={item.name}
          image={item.sprites.front_default}
          types={item.types}
          id={item.id}
          favorite={item.favorite}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
