import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const incrementarTiempo = () => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    };

    const intervalo = setInterval(incrementarTiempo, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Temporizador: {tiempo} segundos</h1>
    </div>
  );
}

export default App;