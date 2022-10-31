import React, { useState } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Manuel");

  const cambiarNombre = (fullName) => {
    setNombre(fullName);
  };

  return (
    <>
      <h2>Mi Primer Estado</h2>

      <p>Mi nombre es: {nombre}</p>

      <input
        type="text"
        placeholder="Nuevo nombre"
        onChange={(e) => setNombre(e.target.value)}
      />

      <button
        onClick={() => {
          cambiarNombre("Manuel Alejandro Roa");
        }}
      >
        {" "}
        Cambiar Nombre
      </button>
    </>
  );
};
