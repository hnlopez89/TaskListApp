import { RegisterComponent } from "../components"
import { useState } from 'react'

export const RegisterPage = () => {

    const [register, setRegister ] = useState(false)


    return(
        <>
            <h1>RegisterPage</h1>
            <div>
                <RegisterComponent register={register} setRegister={setRegister} />
            </div>
        </>
    )
}