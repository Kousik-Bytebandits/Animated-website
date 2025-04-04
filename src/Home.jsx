import Navbar from "./Navbar";
export default function AnimatedWebsite() {
  return (
    <div className="container">
     
      <Navbar/>
      {/* Hero Section */}
      <section className="head">
        <h1>CREATIVE <br/>DESIGN <br/> AGENCY.</h1>
       
      </section>
      {/* image section*/}
      <section className="image">
        <img src="home-page.jpg"></img>
      </section>
      {/* About Section */}
      <section className="about-section">
        <p>About Us</p>
        <div className="main-content">
      <div className="left-content">
        <h2>DISCOVER <br/> OUR <span className="highlight">AGENCY</span></h2>
        <p className="intro-text">
          Welcome to <span className="highlight">PIXY</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
        </p>
      </div>
      <div className="right-content">
        <p>
          We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies. Our team of talented designers, copywriters, and marketers works with passion and dedication to make your business stand out.
        </p>
        <p>
          At <span className="highlight">PIXY</span>, we believe in the power of creativity and innovation. Our goal is to help you build an emotional connection with your audience using cutting-edge tools and approaches.We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies. Our team of talented designers, copywriters, and marketers works with passion and dedication to make your business stand out. We take the time to understand your vision .
          </p>
      </div>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img src="h1.svg" alt="Expert Team" />
          <p className="image-caption">EXPERT TEAM</p>
          <p className="image-description">Our team consists of experienced professionals who work with passion, delivering high-quality projects.</p>
        </div>
        <div className="image-container">
          <img src="h2.svg" alt="Innovative Solutions" />
          <p className="image-caption">INNOVATIVE SOLUTIONS</p>
          <p className="image-description">We offer unique and creative approaches that help your business stand out in the market and achieve success.</p>
        </div>
        <div className="image-container">
          <img src="h3.svg" alt="Client Focus" />
          <p className="image-caption">CLIENT FOCUS</p>
          <p className="image-description">We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.</p>
        </div>
      </div>
    </section>
      
      {/* Services Section */}
      <section className="services-section">
        <p>Our Services</p>
      <div className="heading">
        <h2>
          WE GENERATE <span className="highlight">UNIQUE</span> IDEAS
        </h2>
      </div>
       
       <div className="main-services">
      <div className="services-container">
        <div className="service-box">
          <h3>UI/UX DESIGN</h3>
          <p className="description">
            Design of intuitive and visually appealing user interfaces for web
            and mobile applications, focusing on enhancing the user experience
            and usability.
          </p>
          <div className="read-more">
            <span>READ MORE</span>
            <span className="arrow">➜</span>
          </div>
        </div>

        <div className="service-box">
          <h3>BRAND STRATEGY</h3>
          <p className="description">
            Comprehensive brand development, including logo creation, color
            scheme selection, and visual style design to ensure a cohesive and
            memorable brand identity.
          </p>
          <div className="read-more">
            <span>READ MORE</span>
            <span className="arrow">➜</span>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-box">
          <h2>
            14<span className="plus">+</span>
          </h2>
          <p>YEARS EXPERIENCE</p>
        </div>
        <div className="stats-box">
          <h2>
            45<span className="plus">+</span>
          </h2>
          <p>UNIQUE CUSTOMERS</p>
        </div>
      </div>

      
      
      </div>
    </section>
      
      {/* Contact Section */}
      <section className="section contact">
        <h2>Contact Us</h2>
        
        
      </section>
      
      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Animated Website. All rights reserved.
      </footer>
    </div>
  );
}
