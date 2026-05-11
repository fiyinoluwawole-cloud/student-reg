import React from 'react'

const box = (width, height, img) => {
  return (
    <div style={{ width, height }}>
      <img src={img} alt="" />
    </div>
  )
}

export default box
