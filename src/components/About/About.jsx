import './About.css';

const Home = () => {
    return (
      <section className="section about" id="about">
          <div className="container">
              <h2 className="title-1" data-i18n="about_title">About Me</h2>
              <div className="about__content">
                  <div className="about__image animate">
                      <img src="/images/.jpg" alt="Zara - Frontend Developer" />
                  </div>
                  <div className="about__info">
                      <h2 data-i18n="about_heading">Frontend Developer with 5+ Years of Experience</h2>
                      
                      <div className="about__skills">
                          <div className="skill-bar">
                              <div className="skill-info">
                                  <span data-i18n="skill_html">HTML & CSS</span>
                                  <span>90%</span>
                              </div>
                              <div className="skill-progress">
                                  <span style={{ width: '95%' }}></span>
                              </div>
                          </div>
                          
                          <div className="skill-bar">
                              <div className="skill-info">
                                  <span data-i18n="skill_js">JavaScript</span>
                                  <span>80%</span>
                              </div>
                              <div className="skill-progress">
                                  <span style={{ width: '90%' }}></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Home