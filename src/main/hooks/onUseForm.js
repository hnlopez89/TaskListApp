import { useState } from "react"

export const onUseForm = () => {
    
    const [registerUser, setRegisterUser] = useState({
        name: '',
        email: '',
        password: '',
        created: false
    })
    const blankUser = {
        name: '',
        email: '',
        password: '',
        created: false
    }
    const onInputChange = ({target}) => {
        setRegisterUser({
            ...registerUser,
            [target.name]: target.value
        })
    }

    return{
        registerUser,
        setRegisterUser,
        onInputChange,
        blankUser
    }
}