import React from 'react';
import {Link} from 'react-router-dom';

function header() {
    return (
        <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3 ">
              <div className="site-logo">
                <a href="/" className="name">Elizabeth Lee</a>
              </div>
            </div>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none"><a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-primary"></span></a></span>
              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active"><Link to="/home" className="nav-link">HOME</Link></li>
                  <li><a href="#aboutMe" className="nav-link">ABOUT</a></li>
                  <li><Link to="/portfolio" className="nav-link">PROJECTS</Link></li>
                  <li><a href="#contact" className="nav-link">CONTACT</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default header;