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
      <div className="w-screen h-[calc(100vh-180px)] px-5 pt-20 flex justify-center items-center">
        <div className="w-full max-w-md h-full bg-gray-100 rounded-md flex flex-col p-5 justify-between gap-32 relative">
          {texto.categoria ? (
            <button className="self-end flex items-center" onClick={aleatorio}>
              <span className="text-xs">Sigiente</span>
              <span className="text-orange-400 material-symbols-outlined text-4xl">
              skip_next
              </span>
            </button>
          ) : (
            ""
          )}
          <div className="flex flex-col min-h-60 items-center ">
            {texto.categoria ? (
              ""
            ) : (
             
              <button className="absolute top-0 bottom-0"  onClick={aleatorio}>
                <span className="text-gray-400 material-symbols-outlined text-9xl">
                  play_circle
                </span>
              </button>
             
            )}
            <h2 className="font-bold text-3xl">{texto.categoria}</h2>
            <p className="font-bold mb-4 mt-1">
              {texto.categoria ? "(" + texto.versiculo + ")" : ""}
            </p>
            <p className="max-w-60"> {help ? texto.ayuda : ""}</p>
          </div>
          {texto.categoria ? (
            <div className="flex justify-between items-center">
              <button onClick={mostrarAyuda}>
                {help ? (
                  ""
                ) : (
                  <div className="flex items-center gap-2">
                  <span className="text-4xl material-symbols-outlined text-orange-400">
                    help
                  </span>
                    <span className="text-xs">Ayuda</span>
                  </div>
                )}
              </button>
              <button className="flex items-center gap-2" onClick={abrirEnlace}>
              <span className="text-xs">Link</span>
                <span className="text-4xl text-orange-400 material-symbols-outlined">
                  link
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
