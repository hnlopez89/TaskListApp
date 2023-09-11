import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage, NewPasswordPage, RegisterPage } from '../main/pages'
import { TaskListRoutes, ValidationPage } from '../main/index'


export const TaskListRouter = () => {

    return(
        <>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/login' element={<RegisterPage />}/>
                <Route path='/validation/:validationCode' element={<ValidationPage />}/>
                <Route path="/setPassword/:code" element={<NewPasswordPage/>}/>
                <Route path='/*' element={<TaskListRoutes />}/>
            </Routes>
        </>
    )
}