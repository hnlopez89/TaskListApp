import { Route, Routes } from 'react-router-dom'
import {NavBar} from '../../ui'
import { CollectionPage, CollectionsPage, NewPasswordPage, ProfilePage, TasksPage } from '../pages'


export const TaskListRoutes = () => {

    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/myUser" element={<ProfilePage/>}/>
                <Route path="/myCollections" element={<CollectionsPage/>}/>
                <Route path="/myTasks" element={<TasksPage />}/>
                <Route path="/collection/:id" element={<CollectionPage/>}/>
            </Routes>
        </>
    )
}