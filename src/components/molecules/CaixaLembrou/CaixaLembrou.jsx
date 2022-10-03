import Lembrou from "../../atoms/Lembrou/Lembrou";
import { Container } from "./CaixaLembroustyles";

export default function CaixaLembrou({ status, setStatus, onClick }) {
  const arra = [
    { titulo: "Não lembrei", cor: "red" },
    { titulo: "Quase lembrei", cor: "orange" },
    { titulo: "Zap", cor: "green" },
  ];

  return (
    <Container>
      {arra.map((a, b) => {
        return (
          <div onClick={onClick}>
          <Lembrou
            
            key={b}
            titulo={a.titulo}
            cor={a.cor}
            setStatus={setStatus}
          /> </div>
        );
      })}
    </Container>
  );
}
