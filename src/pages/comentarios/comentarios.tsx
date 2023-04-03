import { useContext } from "react";
import Comentario from "../../components/comentario/comentario";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import { Coment, FormContext } from "../../contexts/formContext";

function Comentarios(){
    
    const {coments} = useContext(FormContext)
    console.log(coments)
    console.log("Comentarios sendo renderizados dinamicamente")
    return(
        <>
            <Header /> 
            <div className="contentContainer"> 
                <div className="comentsContainer">
                        <div id="introduction">
                            Veja oque estão dizendo sobre battiman 2022 no Brasil!
                        </div>
                        {coments.map((coment: Coment) => (
                            <Comentario key={coment.message} name={coment.nome} nota={coment.nota} comentario={coment.message}/>
                            
                        ))}
                        <Form />
                </div> 
            </div>
            <Footer />
        </>
    )
}

export default Comentarios;