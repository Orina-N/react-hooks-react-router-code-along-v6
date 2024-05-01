import { NavLink } from "react-router-dom";

function NavBar () {
  return(
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </>
  )
    
}

export default NavBar