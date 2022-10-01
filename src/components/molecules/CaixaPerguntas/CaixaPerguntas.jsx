import { useState } from "react";
import { Pergunta } from "../../atoms";
import { Bloco } from "./CaixaPerguntas.styles";

export default function CaixaPerguntas() {
  const [arra, setArra] = useState([
    {
      titulo: "Pergunta 1",
      Pergunta: " O que é JSX?",
      Resposta: "R: Uma extensão de linguagem do JavaScript",
      selecionado: 0,
    },
    {
      titulo: "Pergunta 2",
      Pergunta: "O React é ?",
      Resposta: "R: uma biblioteca JavaScript para construção de interfaces",
      selecionado: 0,
    },
    {
      titulo: "Pergunta 3",
      Pergunta: "Componentes devem iniciar com_",
      Resposta: "R:Letra maiuscula",
      selecionado: 0,
    },
    {
      titulo: "Pergunta 4",
      Pergunta: "Usamos o npm para_",
      Resposta: "R: gerenciar os pacotes necessários e suas dependências",
      selecionado: 0,
    },
  ]);

  const handleClick = (index) => {
    console.log("oi");
    const fullObject = arra;
    const selectedObject = arra[index];
    selectedObject.selecionado = 1;
    fullObject[index] = selectedObject;
    setArra(fullObject);
  };

  return (
    <Bloco>
      {arra.map((e, index) => {
        return (
          <Pergunta
            onClick={(e) => {
              handleClick(index)
            }}
            key={index}
            titulo={e.titulo}
            pergunta={e.Pergunta}
            resposta={e.Resposta}
            style={e.selecionado ? { color: "red" } : { color: "white" }}
          />
        );
      })}
    </Bloco>
  );
}
