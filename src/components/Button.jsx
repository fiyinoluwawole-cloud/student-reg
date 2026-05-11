import React from 'react'

const button = ({ backgroundColor,oruko, width, name }) => {
    // console.log(props);
    
  return (
    <div>
      <button style={{" backgroundColor": backgroundColor, "width": width, "oruko": oruko}}>{name}</button>
    </div>
  )
}

export default button
