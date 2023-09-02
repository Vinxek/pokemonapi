import React from "react";

function toUpperCase(namePokemon) {
  return namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1);
}

export default toUpperCase;
