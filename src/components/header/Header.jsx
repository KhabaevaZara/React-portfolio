import './Header.css';
import { FaCode, FaBars, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="logo">
            <FaCode className="fas fa-code" />
            <strong data-i18n="logo">Portfolio</strong>
          </a>
          <div className="contener">
            <ul className="nav-list" id="navMenu">
              <li className="nav-list__item">
                <a href="#" className="nav-list__link" data-i18n="nav_home">Home</a>
              </li>    
              <li className="nav-list__item">
                <a href="#about" className="nav-list__link" data-i18n="nav_about">About</a>
              </li> 
              <li className="nav-list__item">
                <a href="#projects" className="nav-list__link" data-i18n="nav_projects">Projects</a>
              </li> 
              <li className="nav-list__item">
                <a href="#contact" className="nav-list__link" data-i18n="nav_contact">Contact</a>
              </li> 
            </ul>  
            
            <button className="mobile-menu-btn" id="mobileMenuBtn">
              <FaBars className="fas fa-bars" />
            </button>

            <div className="lang-switcher">
              <button id="languageSwitcher" className="lang-btn">
                <FaGlobe className="fas fa-globe" />
                <span id="langText">EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;