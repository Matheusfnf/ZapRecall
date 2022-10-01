import React from "react";
import logo from "../../../images/logo.png"
import { Container } from "../../../components/atoms/logo/Logo.styles"
import { Estilo } from "./Logo.styles";

export default function Logo(){
    return( 
    <>
    <Container> <Estilo><img src={logo} alt = "logo" />  </Estilo> <p>ZapRecall</p> </Container>
    </>
    );
}