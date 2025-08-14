import './HeaderMe.css'

const Header = () => {
  return (
    <header class="header">
    <div class="header__wrapper">
        <h6 class="header__title">
            <strong data-i18n="header_title">Hi, I'm Zara</strong>
            <span data-i18n="header_subtitle">Frontend Developer & UI Designer</span>
        </h6>
        <div class="header__text">
            <p data-i18n="header_description">I create beautiful, responsive websites</p>
        </div>
        <div class="header__actions">
            <a href="#projects" class="btn" data-i18n="btn_projects">View Projects</a>
            <a href="#contact" class="btn" data-i18n="btn_contact">Contact Me</a>
        </div>
    </div>
   
</header>
  )
}

export default Header