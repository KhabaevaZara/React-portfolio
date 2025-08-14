

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
          <div className="container">
              <div className="footer__content">
                  <div className="footer__about">
                      <h3 data-i18n="footer_about_title">Zara Portfolio</h3>
                      <p data-i18n="footer_about_text">Creating beautiful, functional websites with a focus on user experience and modern design principles.</p>
                      <div className="social-links">
                          <a href="#"><i className="fab fa-github"></i></a>
                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-dribbble"></i></a>
                      </div>
                  </div>
                  
                  <div className="footer__links">
                      <h3 data-i18n="footer_links">Quick Links</h3>
                      <ul>
                          <li><a href="#" data-i18n="footer_home">Home</a></li>
                          <li><a href="#about" data-i18n="footer_about">About</a></li>
                          <li><a href="#projects" data-i18n="footer_projects">Projects</a></li>
                          <li><a href="#contact" data-i18n="footer_contact">Contact</a></li>
                      </ul>
                  </div>
                  
                  <div className="footer__newsletter">
                      <h3 data-i18n="footer_newsletter">Newsletter</h3>
                      <p data-i18n="footer_newsletter_text">Subscribe to receive updates on new projects and articles.</p>
                      <form>
                          <input type="email" placeholder="Your Email" data-i18n-ph="ph_newsletter" />
                          <button type="submit"><i className="fas fa-paper-plane"></i></button>
                      </form>
                  </div>
              </div>
              
              <div className="footer__copyright">
                  <p data-i18n="footer_copyright">2025 Zara Portfolio. All rights reserved.</p>
              </div>
          </div>
      </footer>
      {/* Back to top button */}
      <div className="back-to-top" id="backToTop">
          <i className="fas fa-arrow-up"></i>
      </div>
    </>
  )
}

export default Footer