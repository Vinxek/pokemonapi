import React from "react";
import { Link } from "react-router-dom";

const PokemonThumnails = ({ id, name, image, type, weight, height }) => {
  return (
    <div className="col-4">
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {name} #{id.toString().padStart(4, "0")}
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
