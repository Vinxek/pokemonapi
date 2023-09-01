import React from "react";
import PokemonThumnails from "./PokemonThumnails";
import { useEffect, useState } from "react";

function PokemonCards() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon((currentList) => [...currentList, data]);

        console.log(allPokemon);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemon);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {allPokemon.map((pokemon, index) => (
          <PokemonThumnails
            id={pokemon.id}
            name={pokemon.name}
            image={
              pokemon.sprites["other"]["official-artwork"]["front_default"]
            }
            type={pokemon.types[0].type.name}
            weight={pokemon.weight / 10}
            height={pokemon.height / 10}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonCards;
