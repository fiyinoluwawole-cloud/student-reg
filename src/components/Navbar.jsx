import style from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
    <div className = {`${style.navbar}`}>
      <div>
      <h1>SQI</h1>
    </div>
    <div className="d-flex gap-4">
      <h3>Home</h3>
      <h3>Contact</h3>
      <h3>Services</h3>
      <h3>About</h3>
    </div>
    <div>
      <button className="btn btn-light text-success">Get Started</button>
    </div>
    </div>
    </>
    
  )
}

export default Navbar