import './HeaderMe.css'

const Header = () => {
  return (
    <header className="header">
    <div className="header__wrapper">
        <h6 className="header__title">
            <strong data-i18n="header_title">Hi, I'm Zara</strong>
            <span data-i18n="header_subtitle">Frontend Developer & UI Designer</span>
        </h6>
        <div className="header__text">
            <p data-i18n="header_description">I create beautiful, responsive websites</p>
        </div>
        <div className="header__actions">
            <a href="#projects" className="btn" data-i18n="btn_projects">View Projects</a>
            <a href="#contact" className="btn" data-i18n="btn_contact">Contact Me</a>
        </div>
    </div>
   
</header>
  )
}

export default Header