import { deletePaletaRequest, getPaletaRequest } from "../api/paleta.api";
import "../styles/Paleta.css";
import "../styles/Saved.css";
import { HiTrash } from "react-icons/hi";
import { useEffect } from "react";

const Saved = ({ savedPallette, setSavedPallette, setCurrentPallette }) => {
  useEffect(() => {
    async function loadPaletas() {
      const { data } = await getPaletaRequest();
      setSavedPallette(data);
    }
    loadPaletas();
  }, []);

  return (
    <div className="saved">
      <h2>Saved pallettes</h2>
      <div className="saved-group">
        {savedPallette.length >= 1 ? (
          savedPallette.map(({ id, nombre, paleta }, index) => (
            <div
              className="saved-contenedor"
              key={`paleta${index}`}
              onClick={() => setCurrentPallette(paleta)}
            >
              <div className="box-saved">
                <span>{nombre}</span>
                <button
                  onClick={() => {
                    deletePaletaRequest(id);
                    setSavedPallette((prev) =>
                      prev.filter(
                        (borrador) => prev.indexOf(borrador) !== index
                      )
                    );
                  }}
                >
                  <HiTrash />
                </button>
              </div>
              <div className="paleta pallettes">
                {paleta.map((color, index) => (
                  <div
                    className="color peq-cir"
                    style={{ background: color }}
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <h5>No saved pallettes</h5>
        )}
      </div>
    </div>
  );
};

export default Saved;
