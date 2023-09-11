import { useNavigate, NavLink } from "react-router-dom"
import  './NavBar.css'


export const NavBar = () => {

    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.clear()
        navigate('/', {
            replace:true
        })
    }

    return(
        <nav>
            <div>

                    <NavLink 
                        className={({isActive}) => `nav_option${ isActive ? '_active' : '' }`}
                        to="/myCollections"
                    >
                        Mis colecciones
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav_option${ isActive ? '_active' : '' }`}
                        to="/myTasks"
                    >
                        Mis tareas
                    </NavLink>
            </div>
            <div>
                    <NavLink 
                        className={({isActive}) => `nav_option${ isActive ? '_active' : '' }`}
                        to="/myUser"
                    >
                        Mi Usuario
                    </NavLink>

                    <button onClick={
                        onLogout
                        }>Logout</button>
            </div>
        </nav>
    )
}