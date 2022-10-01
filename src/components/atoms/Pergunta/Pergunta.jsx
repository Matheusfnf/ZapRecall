import React, { useState } from "react";
import { Button, LastButton } from "./Pergunta.styles";
import CaixaLembrou from "../../molecules/CaixaLembrou/CaixaLembrou";

export default function Pergunta(props, style) {
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState("");

  const button = {
    0: props.titulo,
    1: props.pergunta,
    2: props.resposta,
  };

  const handleClick = () => {
    if (page >= 2) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <>
      {page === 2 ? (
        <LastButton onClick={() => handleClick()} status={status}>
          {button[page]}
          <div>
            <CaixaLembrou status={status} setStatus={setStatus} />
          </div>
        </LastButton>
      ) : (
        <Button onClick={() => handleClick()}>{button[page]}</Button>
      )}
    </>
  );
}
