import React, {useState} from 'react'

export const Signup = () => {
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

        return{
            handleDetails, handleSignup
        }
    }