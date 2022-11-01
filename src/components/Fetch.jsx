import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const getData = async () => {
    try {
      setTimeout(async () => {
        const res = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await res.json();
        setData(data);
        setCargando(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    console.log(data);
  }, []);

  return (
    <div>
      {cargando
        ? "Cargando"
        : data.map((e) => <p key={e.id}>{e.first_name}</p>)}
    </div>
  );
};
