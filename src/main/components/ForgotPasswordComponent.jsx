import { useState } from "react"
import { onForgetPassword } from '../helpers'

export const ForgotPasswordComponent = () => {
    const [emailForgotten, setEmailForgotten ] = useState('')
    const [forget, setForget ] = useState(false)

    return (
        <div>
        <p onClick={()=>setForget(!forget)}>¿Te has olvidado la contraseña?</p>
        {forget &&
            <div>
                <input
                type="text"
                name='forget'
                value={emailForgotten}
                onChange={({target})=> setEmailForgotten(target.value)} />
                <button onClick={
                    () => onForgetPassword(emailForgotten)
                }>Confirmar</button>
            </div>
        }
    </div>
)}