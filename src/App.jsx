import { useState } from "react";
import ReposList from "./components/CalcImc";

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
  };

  const handleButtonClick = () => {
    setAltura(altura);
    setPeso(peso);
  };

  return (
    <>
    <div className="calc">
    <label htmlFor="altura">Altura em centimetros(cm):</label>
      <input type="number" id="altura" value={altura} onChange={handleAlturaChange} placeholder="Altura em centimetros" />

      <label htmlFor="peso">Peso(kg):</label>
      <input type="number" id="peso" value={peso} onChange={handlePesoChange} placeholder="Peso" />
    </div>
      
      <>
        <ReposList altura={altura} peso={peso} />
      </>
    </>
  );
}

export default App;
