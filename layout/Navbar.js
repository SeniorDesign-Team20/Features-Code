import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import * as features from './../selectedFeatures'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={require('./../files_to_modify/logo.png')}/>
      </Link>

      <ul>
        <CustomLink to="/">Home</CustomLink>
        {features.include_about      && <CustomLink to="/about">About</CustomLink>}
        {features.include_hours      && <CustomLink to="/hours">Hours</CustomLink>}
        {features.include_contact    && <CustomLink to="/contact">Contact Us</CustomLink>}
        {features.include_help       && <CustomLink to="/help">Help</CustomLink>}
        {features.include_careers    && <CustomLink to="/careers">Careers</CustomLink>}
        {features.include_people     && <CustomLink to="/people">People</CustomLink>}
        {features.include_faq        && <CustomLink to="/faq">FAQs</CustomLink>}
        {features.include_weather    && <CustomLink to="/weather">Weather</CustomLink>}
        {features.include_calendar   && <CustomLink to="/calendar">Calendar</CustomLink>}
        {features.include_chat       && <CustomLink to="/chat">Chat</CustomLink>}
        {features.include_fileUpload && <CustomLink to="/fileUpload">Upload File</CustomLink>}
        {features.include_map        && <CustomLink to="/map">Map</CustomLink>}
        {features.include_apply      && <CustomLink to="/apply">Apply Now</CustomLink>}
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
