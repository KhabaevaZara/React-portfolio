
import './Header.css';
const Header = () => {
  return (
    <nav class="nav" id="navbar">
    <div class="container">
        <div class="nav-row">
            <a href="#" class="logo">
                <i class="fas fa-code"></i>
                <strong data-i18n="logo">Portfolio</strong>
                
            </a>
            <div class="contener">
            <ul class="nav-list" id="navMenu">
                <li class="nav-list__item">
                    <a href="#" class="nav-list__link " data-i18n="nav_home">Home</a>
                </li>    
                <li class="nav-list__item">
                    <a href="#about" class="nav-list__link" data-i18n="nav_about">About</a>
                </li> 
                <li class="nav-list__item">
                    <a href="#projects" class="nav-list__link" data-i18n="nav_projects">Projects</a>
                </li> 
                <li class="nav-list__item">
                    <a href="#contact" class="nav-list__link" data-i18n="nav_contact">Contact</a>
                </li> 
  
            </ul>  
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>

            <div class="lang-switcher">
                <button id="languageSwitcher" class="lang-btn">
                    <i class="fas fa-globe"></i>
                    <span id="langText">EN</span>
                </button>
            </div>

            </div>


        </div>
    </div>
</nav>
  )
}

export default Header