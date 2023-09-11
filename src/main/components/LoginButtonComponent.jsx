import { useNavigate } from 'react-router-dom'
import { onLoginUser } from '../helpers'
import {onUseForm} from '../hooks'


export const LoginButtonComponent = ({registerUser, setLoginError}) => {
    const navigate = useNavigate()
    //const {setRegisterUser} = onUseForm()
    return(<>
    <button onClick={async()=>{
        const x = await onLoginUser(registerUser)
        if(x === "user not validated") setLoginError(x)
        else{
            navigate('/myUser', {
                replace: true
            })                        
        }
    }} >Login</button>
    </>
)}
