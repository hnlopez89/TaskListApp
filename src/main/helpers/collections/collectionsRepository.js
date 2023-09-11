export const GetMyCollections = async(token, setCollections) => {
    const url = 'http://www.tasklisthnlopez.somee.com/MyCollections'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.json()
    setCollections(data);
    return data
}

export const createCollection = async(token, name) => {
    const url = 'http://www.tasklisthnlopez.somee.com/newCollection/'
    console.log(token, name);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({'Name': name})
    })
    const data = await response.json()
    return data
}

export const getCollectionById = async(token, id, setCollection, collection) => {
    const url = `http://www.tasklisthnlopez.somee.com/MyCollection/collection?collection=${id}`
    console.log(token,id);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.json()
    setCollection(data);
    console.log(data);
    return data
    
}