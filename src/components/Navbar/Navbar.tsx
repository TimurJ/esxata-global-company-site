import { Link } from 'react-router'
import logo from '../../assets/company-logo.webp'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/">
        <img className="company-logo" src={logo} alt="Esxata Company Logo" />
      </Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
