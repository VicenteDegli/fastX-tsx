import { useContext } from "react";
import { FormContext } from "../../contexts/formContext";

interface props{
    name: string,
    nota:number,
    comentario: string,
}

function Comentario(props:props){
  
    function retornaNota(){
        let estrelas: string[] = [];
        for(let cont = 0; cont<props.nota; cont++){
            estrelas.push('☆');
        }  
        return estrelas;  
    }

    return(
        <div className="coments">
            <p className="star">
                {retornaNota()}
            </p>
            <p>{props.name}</p>
            <p>{props.comentario}</p>
        </div>
    )
}

export default Comentario;