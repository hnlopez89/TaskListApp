import { useNavigate } from "react-router-dom"

export const CollectionComponent = ({collection}) => {

    const navigate =  useNavigate()
    const accessCollection = () => {
        navigate(`/collection/${collection.id}`)
    }
    return(
            <div>
                <span onClick={accessCollection}> {collection.name}</span>
            </div>
    )
}