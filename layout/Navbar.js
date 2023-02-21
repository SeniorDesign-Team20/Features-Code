import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {include_contact, include_help, include_jobs, include_people, include_faq} from './../selectedFeatures'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={require('./../files_to_modify/logo.png')}/>
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {include_contact && <CustomLink to="/contact">Contact Us</CustomLink>}
        {include_help && <CustomLink to="/help">Help</CustomLink>}
        {include_jobs && <CustomLink to="/help">Jobs</CustomLink>}
        {include_people && <CustomLink to="/people">People</CustomLink>}
        {include_faq && <CustomLink to="/faq">FAQs</CustomLink>}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

