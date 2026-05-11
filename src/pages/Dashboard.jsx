import {useState} from "react"
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import UserInfo from '../components/UserInfo';
import Welcome from '../components/welcome';


const Dashboard = () => {

  const[view, setView] = useState("register");
  const[data, setData] = useState({
      name: "",
      age: "",
      gender: "",
      department: "",
      course: "",
      institution: ""
});

const getForm = (param) => {
  alert("Hello");
  console.log({param});
  setData(param);
  console.log(data);
  setView("welcome");
}
  
  return (
    <>
      <Navbar />
      {
        view == "register"?(
          <Register data = {data} getForm = {getForm}/>
        ):(
          <>
          <Welcome name={data.name} age={data.age} gender={data.gender} />
       <UserInfo
        department={data.department}
        institution={data.institution}
        course={data.course}
         />
         </>
        )}
      
      
     
    </>
  )
}

export default Dashboard

// Props - properties
// Props are used to pass data from one component to another. They are read-only and cannot be modified by the receiving component. Props are commonly used to customize the behavior and appearance of components, making them reusable and flexible. Props are commonly used to customize the behavior and appearance of components, making them reusable and flexible. Props can be of any data type, including strings, numbers, arrays, objects, and even functions. They are typically passed as attributes when rendering a component and can be accessed within the component using the props object. Props are an essential part of React's component-based architecture and play a crucial role in building dynamic and interactive user interfaces.



