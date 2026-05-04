import {useState} from 'react'

const Register = (data, getForm) => {
    // console.log(props);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [institution, setInstitution] = useState(SQI);

  const submitForm =() => {
    console.log({name, age, gender, department, course, institution});
    data.name = name
    data.age = age
    data.gender = gender
    data.department = department
    data.course = course
    data.institution = institution

    getForm(data)
  };

  return (
    <>
    <div>Register<div/>
      <div>
        <label htmlFor="">Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter full name' />
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input onChange={(e) => setAge(e.target.value)} type="text" placeholder='Enter age' />
      </div>
      <div>
        <label htmlFor="">Gender:</label>
        <input onChange={(e) => setGender(e.target.value)} type="text" placeholder='Enter gender' />
      </div>
      <div>
        <label htmlFor="">Department:</label>
        <input onChange={(e) => setDepartment(e.target.value)} type="text" placeholder='Enter department' />
      </div>
      <div>
        <label htmlFor="">Course:</label>
        <input onChange={(e) => setCourse(e.target.value)} type="text" placeholder='Enter course' />
      </div>
      <div>
        <label htmlFor="">Institution:</label>
        <input onChange={(e) => setInstitution(e.target.value)} type="text" placeholder='Enter institution' />
      </div>
      <div>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
    </>
  );
};

export default Register
