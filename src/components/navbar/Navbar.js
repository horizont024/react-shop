import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Shop </NavLink>
      <NavLink to="/cart">Cart </NavLink>
    </div>
  )
}

export default Navbar
