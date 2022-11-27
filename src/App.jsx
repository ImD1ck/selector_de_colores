import { useState } from "react";

import Header from "./components/Header";
import Paleta from "./components/Paleta";
import Tabla from "./components/Tabla";
import Nombrar from "./components/Nombrar";
import Saved from "./components/Saved";

import "./styles/App.css";
import { useEffect } from "react";

const currentPaletteInitalState = ["", "", "", "", ""];

function App() {
  const [currentPalette, setCurrentPalette] = useState(
    currentPaletteInitalState
  );
  const [color, setColor] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  // const [savedPallette, setSavedPallette] = useState([]);

  //Example initial state
  const [savedPallette, setSavedPallette] = useState([
    {
      id: 1,
      nombre: "Example",
      paleta: ["#000", "#aaa", "#b1b", "#f5f", "#fff"],
    },
  ]);

  const resetPallette = () => setCurrentPalette(currentPaletteInitalState);

  useEffect(() => {
    setCurrentPalette((previusCurrentPalette) => {
      const arr = [...previusCurrentPalette];
      arr.splice(currentPosition, 1, color);
      return arr;
    });
  }, [color]);

  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Paleta
          currentPalette={currentPalette}
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />
        <div className="contenedor">
          <Tabla color={color} setColor={setColor} />
          <Nombrar
            setSavedPallette={setSavedPallette}
            currentPalette={currentPalette}
            resetPallette={resetPallette}
          />
        </div>
        <Saved
          savedPallette={savedPallette}
          setSavedPallette={setSavedPallette}
          setCurrentPallette={setCurrentPalette}
        />
      </main>
    </div>
  );
}

export default App;
