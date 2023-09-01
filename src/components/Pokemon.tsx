import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonThumnails from "./PokemonThumnails";

const pokemon = () => {
  const [pokemon, setPokemon] = useState({ name: "" });
  const [img, setImg] = useState();
  const params = useParams();
  const pokemonIndex = params.pokemonIndex;

  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
    );
    const data = await res.json();

    setImg(data.sprites.other["official-artwork"]["front_default"]);

    setPokemon(data);
  };
  console.log(img);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="container">
      <img src={img} alt={pokemon.name} />
    </div>
  );
};

export default pokemon;
