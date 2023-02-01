/*
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
return (
	<ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
    </ul>
);
};

export default Navbar;
*/

import { Link, useMatch, useResolvedPath } from "react-router-dom"
//import {app_name} from './files_to_modify/app_info';
import {include_about, include_contact, include_help, include_jobs} from './selectedFeatures'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={require('./files_to_modify/logo.png')}/>
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        {include_about && <CustomLink to="/about">About</CustomLink>}
        {include_contact && <CustomLink to="/contact">Contact Us</CustomLink>}
        {include_help && <CustomLink to="/help">Help</CustomLink>}
        {include_jobs && <CustomLink to="/help">Jobs</CustomLink>}
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

