import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>please login</div>

    return <div> welcome {user.username} your password is {user.password }</div>

}

export default profile