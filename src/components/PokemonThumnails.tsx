import React from "react";
import { Link } from "react-router-dom";
import "./toUpperCase";
import toUpperCase from "./toUpperCase";

const PokemonThumnails = ({ id, name, image, type, weight, height }) => {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center align-items-center">
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={toUpperCase(name)} />
        <div className="card-body">
          <h5 className="card-title">
            {toUpperCase(name)} #{id.toString().padStart(4, "0")}
          </h5>
          <p className="card-text">
            Weigh: {weight} kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Height: {height} m <br /> Type: {type}
          </p>
          <Link to={`pokemon/${id}`}>
            <button type="button" className="btn btn-info">
              <strong>More info</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonThumnails;
