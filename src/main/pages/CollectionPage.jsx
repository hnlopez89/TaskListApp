import { useParams } from "react-router-dom"
import { getCollectionById, createTask, getTasksByCollection } from "../helpers"
import { useEffect, useState } from "react"
import picture from '../../assets/addIcon.svg'

export const CollectionPage = () => {
    
    const {id} = useParams()
    const token = localStorage.getItem('token')
    const [collection, setCollection] =  useState({})
    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState({
        creating: false,
        Title: '',
    })
    useEffect(()=> {
        setCollection(getCollectionById(token,id, setCollection, collection))
        setCollection(getTasksByCollection(token,id, setTaskList))
        console.log(taskList);
    }, [])
    useEffect(()=> {
        setCollection(getCollectionById(token,id, setCollection, collection))
    }, [taskList])
    return(
        <>
            <h1>{collection.name}</h1>
            {collection.tasks && collection.tasks.length >1 && 
                <p>total tareas: {collection.tasks}</p>
            }
            {newTask.creating && <div>
                <input type="text" name="Title" onChange={({target})=> setNewTask({...newTask,[target.name]:target.value})}/>
                <button onClick={()=> {
                    createTask(token, id, setTaskList, newTask)
                    setNewTask({...newTask, creating: false, title: ''})
                }}>Confirm new Task</button>
            </div>}

            <img src={picture} alt="" className="addIcon" onClick={()=> setNewTask({...newTask, creating: !newTask.creating})}/>

        </>
    )
}