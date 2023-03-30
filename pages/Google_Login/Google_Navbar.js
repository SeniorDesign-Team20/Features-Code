import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import * as features from './../../selectedFeatures'

import {UserAuth} from './AuthContext';

  export default function Google_Navbar() {
    const { user, logOut } = UserAuth();
  
    const handleSignOut = async () => {
      try {
        await logOut()
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <nav className="nav">
        <Link to="/" className="site-title">
        <img src={require('./../../files_to_modify/logo.png')}/>
        </Link>
  
        {!user?.displayName ? (
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/signin">Sign In</CustomLink>
            </ul>
        ) :
  
        (
            <ul>
                <CustomLink to="/">Home</CustomLink>
                {features.include_about      && <CustomLink to="/about">About</CustomLink>}
                {features.include_hours      && <CustomLink to="/hours">Hours</CustomLink>}
                {features.include_contact    && <CustomLink to="/contact">Contact Us</CustomLink>}
                {features.include_about      && <CustomLink to="/about">About</CustomLink>}
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
                {<CustomLink to="/account">Account</CustomLink>}
                {<button onClick={handleSignOut}>Logout</button>}
            </ul>
        )}
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