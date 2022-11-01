import { useState } from "react";

import "./App.css";
import { Fetch } from "./components/Fetch";
import { Formulario } from "./components/Formulario";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { Year } from "./components/Year";

function App() {
  const date = new Date();
  const year = date.getFullYear();

  const [data, setData] = useState(year);

  return (
    <div className="App">
      <header className="App-header">
        <Formulario />
        {/* <Fetch /> */}
        {/* <Year data={data} setData={setData} /> */}
        {/* <MiPrimerEstado /> */}
      </header>
    </div>
  );
}

export default App;
