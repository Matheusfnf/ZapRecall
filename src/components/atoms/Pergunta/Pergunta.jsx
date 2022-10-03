import React, { useContext, useState } from "react";
import { Button, LastButton } from "./Pergunta.styles";
import CaixaLembrou from "../../molecules/CaixaLembrou/CaixaLembrou";
import iconecerto from "../../../images/icone_certo.png";
import iconequase from "../../../images/icone_erro.png";
import iconeerro from "../../../images/icone_quase.png";
import setaplay from "../../../images/seta_play.png";
import Contexto from "../Contexto/MyContext";

export default function Pergunta(props, style) {
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState("");
  const { total, setTotal } = useContext(Contexto);

  const button = {
    0: props.titulo,
    1: props.pergunta,
    2: <p> {props.resposta} </p>,
    3: props.titulo,
  };

  const handleClick = () => {
    if (page >= 3) {
      return;
    }
    setPage(page + 1);
  };

  const finalButton = () => {
    setPage(3);
    setTotal(total + 1);
  };

  if (page === 0) {
    return (
      <>
        <Button color={status} onClick={() => handleClick()}>
          {button[page]}
          <img src={setaplay} />
        </Button>
      </>
    );
  }
  if (page === 1) {
    return (
      <>
        <Button color={status} onClick={() => handleClick()}>
          {button[page]}
        </Button>
      </>
    );
  }
  if (page === 2) {
    return (
      <>
        <LastButton status={status}>
          <p>{button[page]}</p>
          <div>
            <CaixaLembrou
              status={status}
              setStatus={setStatus}
              onClick={() => finalButton()}
            />
          </div>
        </LastButton>
      </>
    );
  }
  if (page === 3) {
    if (status === "green") {
      return (
        <>
          <Button grifado="ok" color={status}>
            {button[page]}
            <img src={iconecerto} />
          </Button>
        </>
      );
    }
    if (status === "orange") {
      return (
        <>
          <Button grifado="ok" color={status}>
            {button[page]}
            <img src={iconeerro} />
          </Button>
        </>
      );
    }
    if (status === "red") {
      return (
        <>
          <Button grifado="ok" color={status}>
            {button[page]}
            <img src={iconequase} />
          </Button>
        </>
      );
    }
  }
}
