export const onRegisterUser = async(registerUser,setRegisterUser) => {
    const url = 'http://www.tasklisthnlopez.somee.com/api/Auth/register'
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json-patch+json",
            'accept': 'text/plain'
        },
        body: JSON.stringify(registerUser)
    })
    const reader = await response.text()
    if(reader) setRegisterUser({...registerUser, created: true})
    return reader
}

export const onLoginUser = async(credentials) => {
    const url = 'http://www.tasklisthnlopez.somee.com/api/Auth/login'
    let data;
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json-patch+json'
            },
            body: JSON.stringify(credentials)
        })
        data = await response.text()
        if(response.status !== 200) throw new Error(data)
        localStorage.setItem('token',data)
        return data;
    }
    catch(error){
        throw Error(error)
    }
    finally {
        return data
    }
    

}

export const onCheckUser = async(token, setUser, user) => {
    const url = 'http://www.tasklisthnlopez.somee.com/api/Auth/MyUser'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
    })
    const {id,email, name, role, creationDate, updateDate} = await response.json()
    setUser({id,email, name, role, creationDate, updateDate});
}

export const onDeleteUser = async(token) => {
    const url = 'http://www.tasklisthnlopez.somee.com/api/Auth/MyUser'
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
            'Authorization': `Bearer ${token}`
        },
    })
    const data = await response.text()
    localStorage.clear()
    return data
}

export const onValidateUser = async(validationCode, setMessage) => {
    const url = `http://www.tasklisthnlopez.somee.com/api/Auth/validate?code=${validationCode}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
        },
    })
    const data = await response.text()
    setMessage(data)
    return data
}

export const onForgetPassword = async(emailAddress) => {
    const url = `http://www.tasklisthnlopez.somee.com/api/Auth/ForgetPassword`
    const user = {
        email: emailAddress,
        password: ''
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify(user)
    })
    const data = await response.text()
    console.log(data);
    return data
}

export const onResetPassword = async(newPassword, code,setSuccess) => {
    const url = `http://www.tasklisthnlopez.somee.com/api/Auth/ResetPassword?code=${code}`
    const user = {
        email: '',
        password: newPassword
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify(user)
    })
    response.status === 200 && setSuccess(true)
    const data = await response.text()
    console.log(data);
    return data
}


