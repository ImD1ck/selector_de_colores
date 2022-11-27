import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createPaletaRequest } from "../api/paleta.api.js";

import "../styles/Nombrar.css";

const Nombrar = ({ setSavedPallette, currentPalette, resetPallette }) => {
  const [nombre, setNombre] = useState("");

  const handleClick = async () => {
    if (nombre == "") {
      alert("Please enter a name");
      return;
    }
    if (currentPalette.some((vacio) => vacio === "")) {
      alert("Please fill all the colors");
      return;
    }
    const {
      data: { id },
    } = await createPaletaRequest({
      nombre,
      paleta: currentPalette,
    }).catch((err) => {
      alert("Error saving palette, check the console");
    });
    setSavedPallette((prev) => [
      ...prev,
      { id, nombre, paleta: currentPalette },
    ]);
    resetPallette();
    setNombre("");
  };

  return (
    <div className="Nombrar">
      <label htmlFor="buscar" className="label-buscar">
        Name
      </label>
      <div className="input-group">
        <input
          type="text"
          name="buscar"
          id="buscar"
          className="input-buscar"
          placeholder="Website color schenme"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="button-buscar" onClick={handleClick}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Nombrar;
