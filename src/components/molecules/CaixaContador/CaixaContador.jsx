import { EstiloContador } from "./CaixaContadorstyle";
import iconecerto from "../../../images/icone_certo.png";
import iconequase from "../../../images/icone_erro.png";
import iconeerro from "../../../images/icone_quase.png";


export default function Contador(){
    
    return(
        <>
        <EstiloContador><p>0/4 concluídos</p></EstiloContador>
        </>
    );
}