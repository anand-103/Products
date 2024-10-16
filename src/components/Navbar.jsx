import React from 'react';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <a href='./'>
          <img
            src="https://www.achieversit.com/assets/images/logo-white.png"
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item mx-3">
              <a href='/category/Mobiles' style={{textDecoration:'none',color:'black'}}>Mobiles</a>
            </li>
            <li className="nav-item mx-3">
              <a href='/category/Electronics' style={{textDecoration:'none',color:'black'}}>Electronics</a>
            </li>
            <li className="nav-item mx-3">
              <a href='/category/Clothing' style={{textDecoration:'none',color:'black'}}>Clothing</a>
            </li>
            <li className="nav-item mx-3">
              <a href='/category/Accessories' style={{textDecoration:'none',color:'black'}}>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;