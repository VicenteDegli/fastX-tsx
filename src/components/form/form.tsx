import { ChangeEvent, useContext, useState } from "react";
import { Coment, FormContext } from "../../contexts/formContext";
import { FormContainer, Span, RadioContainer } from "./styles";

function Form(){

    const {coments, setComents} = useContext(FormContext)

    const [nome, setNome] = useState<string>("");
    const [nota, setNota] = useState<number | null>(null);
    const [message, setMessage] = useState<string>("")   


    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault() /*paralisa o evento reload*/
        
        if(nome && nota && message){
            setComents([...coments, new Coment(nome,nota,message)])
            setNome("")
            setMessage("")
        }
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="nome">Insira seu nome: <br></br></label>
            <input type="text" id="name" name="nome" placeholder="Insira seu nome..." value={nome}  onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}></input>
            <Span>selecione uma nota:</Span>
            <RadioContainer>
                <label htmlFor="nota">1</label>
                <input type="radio" id="nota" name="nota" value={1} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
                <label htmlFor="nota">2</label>
                <input type="radio" id="nota" name="nota" value={2} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
                <label htmlFor="nota">3</label>
                <input type="radio" id="nota" name="nota" value={3} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
                <label htmlFor="nota">4</label>
                <input type="radio" id="nota" name="nota" value={4} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
                <label htmlFor="nota">5</label>
                <input type="radio" id="nota" name="nota" value={5} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
                <label htmlFor="nota">6</label>
                <input type="radio" id="nota" name="nota" value={6} onChange={(e:ChangeEvent<HTMLInputElement>) => setNota(+e.target.value) }/>
            </RadioContainer>
            <label htmlFor="comentario">Comente:</label>
            <textarea name="comentario" id="comentario" rows={10} placeholder="Insira seu comentário..." value={message} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}></textarea>
            <input type="submit" value="Enviar" />        
        </FormContainer>
    )
}

export default Form;

