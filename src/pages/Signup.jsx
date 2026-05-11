import React, { useState } from 'react'
import Signin from '../components/Signup'
import Button from '../components/Button'

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [users, setUsers] = useState([])

    const handleDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserDetails({...userDetails, [name]:value})
        console.log(userDetails);
    }
        
        const handleSignup = () => {

            const {username, email, password} = userDetails;

            if(!username || !email || !password){
                return alert("Kindly inpu all fields")
            }

            const updatedUsers = [...users, userDetails]
            
            console.log(updatedUsers);

            localStorage.setItem("users", JSON.stringify(updatedUsers))

            setUsers(updatedUsers)              
        }
    
  return (
    <div>Signup
      <input placeholder='Enter name' type="text" whenItype={handleDetails} name="username" />
      <input placeholder='Enter email' type="email" whenItype={handleDetails} name="email" />
      <input placeholder='Enter password' type="password" whenItype={handleDetails} name="password" />
      
      <Button oruko="Sign Up" onclick={handleSignup}/>
    </div>
  )
}

export default Signup
