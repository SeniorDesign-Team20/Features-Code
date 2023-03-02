import React from 'react';
//import people from '../../assets/people.png';
import companyPhoto from './../../files_to_modify/logo.png';
import './header.css';

function Header () {
  return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">The Best App Ever Created (max 10 words?)</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of (max 40 words?).</p>
{/*
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
*/}
    </div>

    <div className="gpt3__header-image">
      <img src={companyPhoto} />
    </div>
  </div>
  );
}

export default Header;