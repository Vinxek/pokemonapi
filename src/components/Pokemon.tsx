import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonThumnails";
import toUpperCase from "./toUpperCase";

const pokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: 0,
    height: 0,
  });
  const [type, setType] = useState("");
  const [ability1, setAbility1] = useState("");
  const [ability2, setAbility2] = useState("");
  const [flavorText, setFlavorText] = useState();
  const [img, setImg] = useState();
  const params = useParams();
  const pokemonIndex = params.pokemonIndex;

  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
    );
    const data = await res.json();
    console.log(data.type);
    setImg(data.sprites.other["official-artwork"]["front_default"]);

    setType(data.types[0].type.name);
    setAbility1(data.abilities[0].ability.name);
    setAbility2(data.abilities[1].ability.name);

    setPokemon(data);
  };

  const getFlavortext = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`
    );
    const data = await res.json();
    setFlavorText(data.flavor_text_entries[1].flavor_text);
  };

  useEffect(() => {
    getPokemon();
    getFlavortext();
  }, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="row">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">{toUpperCase(pokemon.name)}</h4>
                <p className="card-text">{flavorText}</p>
                <p>
                  Weigh: {pokemon.weight / 10} kg
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Height:{" "}
                  {pokemon.height / 10} m <br /> Type: {toUpperCase(type)}
                </p>
                <h5>Abilities</h5>
                <p className="card-text">{toUpperCase(ability1)}</p>
                <p className="card-text">{toUpperCase(ability2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pokemon;
