import React, { useState } from "react";

export const Formulario = () => {
  const [usuario, setUsuario] = useState({});
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
    };

    setUsuario(data);
  };

  return (
    <>
      <h2>Formulario</h2>

      <p>{nombre}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          autoComplete="off"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
