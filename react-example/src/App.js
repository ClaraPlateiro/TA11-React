import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const incrementarTiempo = () => {
      setTiempo((prevTiempo) => prevTiempo + 1);
      setTimeout(incrementarTiempo, 1000);
    };

    incrementarTiempo();

    return () => {
      setTiempo(0);
    };
  }, []);

  return (
    <div>
      <h1>Temporizador: {tiempo} segundos</h1>
    </div>
  );
}

export default App;