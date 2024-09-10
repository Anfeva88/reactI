import React, { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const analizarTexto = () => {
    const textoLimpio = texto.replace(/\s+/g, "").toLowerCase();
    const esCapicua = textoLimpio === textoLimpio.split("").reverse().join("");
    setResultado(esCapicua ? "El texto es capicúa" : "El texto no es capicúa");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Verificar si un texto es capicúa</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Introduce un texto"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <p>Texto ingresado: {texto}</p>
      <button onClick={analizarTexto} style={{ padding: "10px", fontSize: "16px" }}>
        Analizar
      </button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;
