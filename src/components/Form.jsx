import { useState } from "react";
import preguntas from "../preguntas";
import Cursor from "./Cursor";
import CountTime from "./CountTime";

const Form = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const preguntaActualObj = preguntas[preguntaActual];

  const verificarRespuesta = () => {
    if (respuestaSeleccionada === preguntaActualObj.respuestaCorrecta) {
      setPuntuacion(puntuacion + 1);
    }

    // Avanzar a la siguiente pregunta
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setRespuestaSeleccionada(null);
    } else {
      // Fin del cuestionario
      alert(
        `Fin del cuestionario. Tu puntuación es ${puntuacion}/${preguntas.length}`
      );
    }
  };

  return (
    <div>
      <Cursor />
      <CountTime />
      <h1>Desafío de conocimiento de lenguajes de programación</h1>
      <h2>Pregunta {preguntaActual + 1}</h2>
      <p>{preguntaActualObj.pregunta}</p>
      <ul>
        {preguntaActualObj.opciones.map((opcion, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={opcion}
                checked={respuestaSeleccionada === opcion}
                onChange={(e) => setRespuestaSeleccionada(e.target.value)}
              />
              {opcion}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={verificarRespuesta}>Responder</button>
    </div>
  );
};

export default Form;
