import React from "react";

export const Year = ({ data, setData }) => {
  const cambiar = (value) => {
    value ? setData((data) => data + 1) : setData((data) => data - 1);
  };
  return (
    <div>
      <h2>Year</h2>
      <p>{data}</p>
      <button
        onClick={() => {
          cambiar("aumentar");
        }}
      >
        Aumentar
      </button>
      &nbsp;
      <button
        onClick={() => {
          cambiar();
        }}
      >
        Restar
      </button>
    </div>
  );
};
