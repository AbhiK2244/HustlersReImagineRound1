import React from 'react';
import './Header.css';
import dominoslogo from './dominoslogo.png';

import SearchIcon from './SearchIcon'; 



function Header() { 
  const [logoClass, setClass] = React.useState("");
  const [listClass, setListClass] = React.useState("");

  function changeClassName(){
    setClass("logo-hover");
  }
  function changeListClassName(){
    setListClass("nav-link-hover");
  }

  return (
    <div className="header">
      <div className={"menu " + listClass}  onMouseOver={changeListClassName}>
        <a href="#menu">MENU</a>
      </div>
      <div className={"domino-store " + listClass}  onMouseOver={changeListClassName}>
        <a href="#">DOMINO'S STORE</a>
      </div>
      <div className={"domino-logo " + logoClass}  onMouseOver={changeClassName}>
        <a href="#">
          <img src={dominoslogo} alt="Domino's Pizza" />
        </a>
      </div>
      <div className={"contact " + listClass}  onMouseOver={changeListClassName}>
        <a href="#">CONTACT</a>
      </div>
      <div className="corporate-enquiry">
        <a href="#">CORPORATE ENQUIRY <SearchIcon /> </a> 
      </div>
    </div>
  );
}

export default Header;
