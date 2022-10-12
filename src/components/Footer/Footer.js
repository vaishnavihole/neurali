import React from 'react'
import AppleBadge from "./apple-badge.png"
import "./Footer.css";

function Footer() {
  return (
    <div>
       <img  className="footer-img" src={ AppleBadge } alt="app"/>  
      <p className='footer-text'>Celly.AI Corporation, © 2022 All rights reserved. Version 2.0.0</p>
      </div>
  )
}

export default Footer