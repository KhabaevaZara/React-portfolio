import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaCode, FaBars, FaGlobe } from 'react-icons/fa';

const Header = () => {
  

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="logo" onClick={(e) => handleSmoothScroll(e, '#')}>
            <FaCode className="fas fa-code" />
            <strong data-i18n="logo">{translations[currentLang].logo}</strong>
          </a>
          
          <div className="contener">
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="navMenu">
              <li className="nav-list__item">
                <a 
                  href="#" 
                  className="nav-list__link" 
                  data-i18n="nav_home"
                  onClick={(e) => handleSmoothScroll(e, '#')}
                >
                  {translations[currentLang].nav_home}
                </a>
              </li>    
              <li className="nav-list__item">
                <a 
                  href="#about" 
                  className="nav-list__link" 
                  data-i18n="nav_about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                >
                  {translations[currentLang].nav_about}
                </a>
              </li> 
              <li className="nav-list__item">
                <a 
                  href="#projects" 
                  className="nav-list__link" 
                  data-i18n="nav_projects"
                  onClick={(e) => handleSmoothScroll(e, '#projects')}
                >
                  {translations[currentLang].nav_projects}
                </a>
              </li> 
              <li className="nav-list__item">
                <a 
                  href="#contact" 
                  className="nav-list__link" 
                  data-i18n="nav_contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  {translations[currentLang].nav_contact}
                </a>
              </li> 
            </ul>  
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="fas fa-bars" />
            </button>

            <div className="lang-switcher">
              <button 
                id="languageSwitcher" 
                className="lang-btn"
                onClick={handleLanguageChange}
              >
                <FaGlobe className="fas fa-globe" />
                <span id="langText">{currentLang.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;