import React from 'react'

const UserInfo = ({department, course, institution}) => {
  return (
    <>
    <div>
      <h3>Department:{department}</h3>
      <h3>Course:{course}</h3>
      <h3>Institution:{institution}</h3>


    </div>
    </>
  )
}

export default UserInfo
