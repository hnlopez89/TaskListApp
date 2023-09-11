
import { useState } from 'react'
import { UserContext } from './userContext'

export const UserProvider = ({children}) => {

    const [user,setUser] = useState({
        id: '',
        name: '',
        email: '',
        role: '',
        creationDate: '',
        updateDate: ''

    })

  
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}