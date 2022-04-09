import React from 'react';
import logo from '..//img/Group_101.png';
import styles from '..//componentStyles/Header2.css';

function Header2() {
  return (
    <div className="header2">
        <div className="logo">
            <img src={logo}/>
        </div>

        <div className="menu">
            <div><p>Home</p></div>
            <div><p>Book</p></div>
            <div><p>Join our team</p></div>
        </div>

        <button className="butSignUp">Sign Up</button>
    </div>
  )
}

export default Header2;