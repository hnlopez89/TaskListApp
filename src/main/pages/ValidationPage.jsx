import { useNavigate, useParams } from "react-router-dom"
import { onValidateUser } from "../helpers";
import { useEffect, useState } from "react";

export const ValidationPage = () => {

    const {validationCode} = useParams()
    const [message, setMessage] = useState('')
    useEffect(()=> {
        onValidateUser(validationCode,setMessage)
    }, [validationCode])
    const navigate = useNavigate()
    
    return(
        <>
            <h1>Enhorabuena</h1>
            <p>{message}</p>
            <button onClick={() => navigate('/',{replace:true})}> Volver al menú</button>
        </>
    )
}