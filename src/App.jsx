import { useState } from "react";
import "./App.css";
import textos from "./database/textos.json";

function App() {
  const [texto, setTexto] = useState({});
  const [help, setHelp] = useState(false);

  // Función para seleccionar un objeto aleatorio
  const aleatorio = () => {
    const i = Math.floor(Math.random() * textos.length);
    setTexto(textos[i]);
    setHelp(false);
  };

  const mostrarAyuda = () => {
    setHelp(true);
  };

  const abrirEnlace = () => {
    window.open(texto.link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="w-screen h-screen p-5 flex justify-center">
        <div className="w-full max-w-xl h-full bg-gray-50 rounded-md flex flex-col p-4 justify-between ">
          <button className="self-end" onClick={aleatorio}>
            <span className="text-orange-400 material-symbols-outlined">restart_alt</span>
          </button>
          <div className="flex flex-col h-44 items-center">
            <h2 className="font-bold text-3xl">{texto.categoria}</h2>
            <p className="font-bold mb-4 mt-1">{"(" + texto.versiculo + ")"}</p>
            <p className="w-60"> {help ? (
                texto.ayuda
              ) : (
                ""
              )}</p>
          </div>

          <div className="flex justify-between">
            <button onClick={mostrarAyuda}>
              {help ? (
                ""
              ) : (
                <span className="material-symbols-outlined text-orange-400">help</span>
              )}
            </button>
            <button onClick={abrirEnlace}>
              <span className=" text-orange-400 material-symbols-outlined">link</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
