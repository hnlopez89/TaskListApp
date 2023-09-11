export const getTasksByCollection = async(token, id,setTaskList) => {
    const url = `http://www.tasklisthnlopez.somee.com/api/Task/collection?collection=${id}`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.json()
    setList(data);
    return data
}

export const createTask = async(token, id,setTaskList, newTask) => {
    const url = `http://www.tasklisthnlopez.somee.com/newtask/collection?collection=${id}`
    const info = {Title: newTask.Title, Description: ''}
    console.log(token, id, info);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({Title: newTask.Title, Description: ''})
    })
    console.log(response);
    const data = await response.json()
    return data
}