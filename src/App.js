import { useState } from "react";

import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { Year } from "./components/Year";

function App() {
  const date = new Date();
  const year = date.getFullYear();

  const [data, setData] = useState(year);

  return (
    <div className="App">
      <header className="App-header">
        <Year data={data} setData={setData} />
        {/* <MiPrimerEstado /> */}
      </header>
    </div>
  );
}

export default App;
