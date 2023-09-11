import { useContext, useEffect, useState } from "react"
import { onRegisterUser, onLoginUser, onCheckUser } from "../helpers"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import {onUseForm} from '../hooks'
import { ForgotPasswordComponent, LoginButtonComponent, RegisterButtonComponent } from "./index";
export const RegisterComponent = ({register, setRegister}) => {
    
    const [errorLogin, setLoginError] = useState('')
    const {registerUser, setRegisterUser, onInputChange, blankUser} = onUseForm()
    const toogleRegister = () => {
        setRegisterUser(blankUser)
        setRegister(x => !x)
    }
    return(
        <>
            <div>
                <div>
                    {register && <input type="text" name="name" 
                    value={registerUser.name} 
                    onChange={onInputChange} />}
                    <input type="text" name="email" 
                    value={registerUser.email} 
                    onChange={onInputChange} />
                    <input type="password" name="password" 
                    value={registerUser.password} 
                    onChange={onInputChange}/>
                    {
                        register ? <RegisterButtonComponent registerUser={registerUser} setRegisterUser={setRegisterUser}/>
                        : <LoginButtonComponent registerUser={registerUser} setLoginError={setLoginError} />
                    }
                    {registerUser.created && <p>El usuario se ha creado correctamente</p>}
                    {errorLogin.length > 0 && <p>{errorLogin}</p>}
                </div>
                <div>
                    {register ? <p>¿Ya estás registrado?</p> 
                    : <p>¿No estás registrado todavía?</p> }
                    <button onClick={()=> {toogleRegister()}} >
                        {register ?"Volver": "Registrate" }
                    </button>
                </div>
                <div>
                    {!register && <ForgotPasswordComponent />}
                </div>
            </div>
        </>
    )
}