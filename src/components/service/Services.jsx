import './Services.css';

const Services = () => {
  return (
  
   <section className="section services">
    <div className="container">
        <h2 className="title-1">My Services</h2>
        <div className="services__grid">
            <div className="service-card animate delay-1">
                <i className="fas fa-laptop-code"></i>
                <h3>Web Development</h3>
                <p>Building responsive, accessible websites using modern HTML, CSS, and JavaScript frameworks with a focus on performance and SEO.</p>
            </div>
            
            <div className="service-card animate delay-2">
                <i className="fas fa-mobile-alt"></i>
                <h3>Responsive Design</h3>
                <p>Creating websites that work flawlessly on all devices, from mobile phones to large desktop displays.</p>
            </div>
            
            <div className="service-card animate delay-3">
                <i className="fas fa-paint-brush"></i>
                <h3>UI/UX Design</h3>
                <p>Designing intuitive user interfaces and experiences that engage users and achieve business goals.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services