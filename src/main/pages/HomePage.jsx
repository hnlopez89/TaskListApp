import { useContext, useEffect, useState } from 'react'
import {RegisterComponent} from '../components'
import { onForgetPassword } from '../helpers'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

export const HomePage = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const context = useContext(UserContext)
    console.log(context);
    return(
        <>
            <h1>HomePage</h1>
            <button onClick={()=> navigate('/login')} >Log in</button>
        </>
    )
}