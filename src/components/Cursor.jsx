import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cursor() {
  const navigate = useNavigate();
  const [mouseLeaveCount, setMouseLeaveCount] = useState(0);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        alert(
          `no puede salir del navegador o se cancela el challenge. ${
            mouseLeaveCount + 1
          }/3`
        );
        setMouseLeaveCount((prevCount) => prevCount + 1);
        if (mouseLeaveCount === 2) {
          alert("Se ha cancelado el reto.");
          navigate("/");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [navigate, mouseLeaveCount]);

  return null;
}

export default Cursor;
