import React from 'react'

const welcome = (props) => {
    console.log(props);
    return (
    <div className='text-success'>
        {props.gender == "Male" ? (
            <h1>Welcome Mr {props.name}</h1>
        ) : (
            <h1>Welcome Mrs {props.name}</h1>
        )}
      <h1>Welcome {props.name}</h1>
    </div>
  )
}

export default welcome
