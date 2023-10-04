import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountTime = () => {
  const initialTime = 30 * 60; // 30 minutos en segundos
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const navigate = useNavigate();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secondsRemaining).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    if (timeRemaining === 0) {
      clearInterval(timer);
      alert("Se acabado el tiempo del challenge, Sera cancelado el challenge");
      navigate("/");
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, navigate]);

  return (
    <div>
      <h1>Contador de 30 minutos</h1>
      <p>Tiempo restante: {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountTime;
