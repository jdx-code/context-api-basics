import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext)

  if(!user) return <div>You have not logged in.</div>

  return <div>Welcome, {user.username}</div>
  
}

export default Profile