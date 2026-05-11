import React from 'react'

const signin = (placeholder, type, name, whenItype) => {
  return (
    <div>
      <input placeholder={placeholder} type={type} name={name} onChange={whenItype} />
    </div>
  )
}

export default signin
