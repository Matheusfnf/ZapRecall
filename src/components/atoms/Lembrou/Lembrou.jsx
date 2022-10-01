import React from "react";
import { Button } from "./Lembrou.styles";

export default function Lembrou(props) {
  const handleClick = (cor) => {
    console.log("oi");
    props.setStatus(cor);
  };

  return (
    <Button color={props.cor} onClick={() => handleClick(props.cor)}>
      <p>{props.titulo}</p>
    </Button>
  );
}
