import React from "react";
import PokemonThumnails from "./PokemonThumnails";
import { useEffect, useState } from "react";

function PokemonCards() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=21"
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      setAllPokemon([]);
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon((currentList) =>
          [...currentList, data].sort((a, b) => a.id - b.id)
        );
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="container-for-cards">
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
        <div className="container text-center">
          <div className="mt-5">
            <button className="btn btn-secondary mb-3" onClick={getAllPokemon}>
              Next 20
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCards;
