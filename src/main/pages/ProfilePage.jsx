import { useContext, useEffect } from "react"
import { UserContext } from "../../context/userContext"
import { onCheckUser, onDeleteUser } from "../helpers"
import { useNavigate } from "react-router-dom"

export const ProfilePage = () => {
    const navigate = useNavigate()
    const x = localStorage.getItem('token')
    const {user, setUser} = useContext(UserContext)
    useEffect(()=> {
        onCheckUser(x, setUser, user)
    }, [x])
    const {id,email, name, role, creationDate, updateDate} = user
    return(
        <>
            <h1>ProfilePage</h1>
            <p>email: {email}</p>
            <p>name: {name}</p>
            <p>role: {role}</p>
            <p>creationDate: {creationDate}</p>
            <p>updateDate: {updateDate}</p>
            <button onClick={()=> {
                onDeleteUser(x) 
                navigate('/',{
                    replace: true
                })
            }}>Borrar usuario</button>
        </>
    )
}