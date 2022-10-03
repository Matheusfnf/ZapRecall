import { CaixaPerguntas } from "./components/molecules";
import CaixaLembrou from "./components/molecules/CaixaLembrou/CaixaLembrou";
import Logo from "./components/atoms/logo/Logo";
import Contador from "./components/molecules/CaixaContador/CaixaContador";
import Contexto from "./components/atoms/Contexto/MyContext";
import { useState } from "react";


function App() {
  const [total,setTotal] = useState(0);
  return (
    <>
      <Contexto.Provider value = {{total,setTotal}}> 
      <div className="caixa">
        <Logo />
        <CaixaPerguntas />
      </div>
      <Contador />
      </Contexto.Provider>
    </>
  );
}

export default App;
