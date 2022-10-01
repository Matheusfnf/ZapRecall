import { CaixaPerguntas } from "./components/molecules";
import  CaixaLembrou  from "./components/molecules/CaixaLembrou/CaixaLembrou";
import Logo from "./components/atoms/logo/Logo";
import Contador from "./components/molecules/CaixaContador/CaixaContador";


function App() {
  return(
    <>
    <div className = "caixa" >
   <Logo />
   <CaixaPerguntas />
   
   </div>
  <Contador />
    
  </>
  )   
}

export default App;
