import { useEffect, useState } from "react";

const CountTime = () => {
  const initialTime = 30 * 60; // 30 minutos en segundos
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secondsRemaining).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Disminuir el tiempo restante en 1 segundo
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Limpiar el temporizador cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Contador de 30 minutos</h1>
      <p>Tiempo restante: {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountTime;
