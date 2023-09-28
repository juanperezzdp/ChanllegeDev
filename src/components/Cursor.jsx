import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (event.clientY <= 0 || event.clientY >= window.innerHeight) {
        alert("El cursor está fuera de la ventana del navegador");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return null;
}

export default Cursor;
