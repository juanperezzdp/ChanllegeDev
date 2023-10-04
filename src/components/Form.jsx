import { useState } from "react";
import preguntas from "../preguntas";
// import Cursor from "./Cursor";
import CountTime from "./CountTime";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const preguntaActualObj = preguntas[preguntaActual];
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(0);

  const navigate = useNavigate();

  const verificarRespuesta = () => {
    if (respuestaSeleccionada === preguntaActualObj.respuestaCorrecta) {
      setPuntuacion(puntuacion + 1);
      setRespuestasCorrectas(respuestasCorrectas + 1);
    } else {
      setRespuestasIncorrectas(respuestasIncorrectas + 1);
    }

    // Avanzar a la siguiente pregunta
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setRespuestaSeleccionada(null);
    } else {
      // Verificar si todas las respuestas fueron correctas o no
      if (respuestasIncorrectas === 0) {
        // Todas las respuestas fueron correctas
        alert(
          `Felicidades, tu puntaje es ${puntuacion} de 20 preguntas. Has logrado pasar el reto de conocimientos.`
        );
        navigate("/certificate");
      } else {
        alert(
          `Fin del cuestionario. Tu puntuación es ${puntuacion}  de 20 preguntas. No alcanzaste el puntaje mínimo para aprobar.`
        );
        navigate("/");
      }
    }
  };

  return (
    <div>
      {/* <Cursor /> */}
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
