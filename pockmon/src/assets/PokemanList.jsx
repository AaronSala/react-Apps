import React from "react";

const PokemanList = ({ pokemon }) => {
  return (
    <div className="pokemon">
      {pokemon.map((p) => (
        <div key={p}> {p}  { pokemon.Url}</div>
      ))}
    </div>
  );
};

export default PokemanList;
