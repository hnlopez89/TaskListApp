import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { onResetPassword } from "../helpers"

export const NewPasswordPage = () => {
    const {code} = useParams()
    const [newPassword, setNewPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    return(
        <>
            <h1>New Password Page</h1>
            <input type="password" name="newPassword" onChange={({target})=> setNewPassword(target.value)} />
            <button onClick={() => {
                onResetPassword(newPassword,code, setSuccess)
            }}>Confirmar nuevo password</button>
            {success && <button onClick={() => navigate('/', {replace: true})}>Volver al menú</button>}
        </>
    )
}