import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext";
import { GetMyCollections, createCollection } from "../helpers";
import picture from '../../assets/addIcon.svg'
import './CollectionsPage.css'
import { CollectionComponent } from "../components";

export const CollectionsPage = () => {

    const [collections, setCollections] = useState([])
    const [newCollection, setNewCollection] = useState({name: '', creating: false})
    const token = localStorage.getItem('token')
    
    const addCollection = (name) =>{
        
        createCollection(token, name)
    }
    useEffect(()=> {
        GetMyCollections(token, setCollections)
    }, [token])
    useEffect(()=> {
        
    }, [collections])
    return(
        <>
            <h1>CollectionsPage</h1>
            {newCollection.creating && <div>
                <input type="text" name="name" onChange={({target})=> setNewCollection({...newCollection,[target.name]:target.value})}/>
                <button onClick={()=> {
                    addCollection(newCollection.name)
                    GetMyCollections(token, setCollections)
                }}>Confirm</button>
            </div>}
            <img src={picture} alt="" className="addIcon" onClick={()=> setNewCollection({...newCollection, creating: !newCollection.creating})}/>
            <ul>
                {collections.map((collection)=> {
                    return (<CollectionComponent key={collection.id} collection={collection} />)
                })}
            </ul>
        </>
    )
}