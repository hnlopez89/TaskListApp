import { useEffect } from 'react'
import { onRegisterUser } from '../helpers'

export const RegisterButtonComponent = ({registerUser, setRegisterUser}) => {
    return(<>
        <button onClick={()=>onRegisterUser(registerUser,setRegisterUser)
            } >Registrate</button>
        </>
    )
}
