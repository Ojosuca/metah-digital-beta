/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #FFA500;
  --secondary-color: #ff8c00;
  --background-color: #111;
  --text-color: #fff;
  --font-family: 'Montserrat', sans-serif;
  --light-background: #f4f4f4;
  --dark-background: #222;
  --transition-speed: 0.3s;
}

body {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden; /* Evita scroll horizontal */
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

/* Toggle Theme */
body.light-mode {
  background-color: var(--light-background);
  color: var(--dark-background);
}

body.light-mode .navbar {
  background-color: rgba(244, 244, 244, 0.9);
}

body.light-mode .navbar .cta-button,
body.light-mode .contact-section button {
  background-color: var(--primary-color);
  color: var(--text-color);
}

body.light-mode .navbar .cta-button:hover,
body.light-mode .navbar .cta-button:focus,
body.light-mode .contact-section button:hover,
body.light-mode .contact-section button:focus {
  background-color: var(--secondary-color);
}

body.light-mode .toggle-theme i {
  color: #000;
}

/* Header */
header {
  background-color: var(--background-color);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(17, 17, 17, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  transition: background-color var(--transition-speed);
}

.navbar .logo img {
  max-height: 50px;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  align-items: center;
}

.navbar .nav-links li {
  margin: 0 15px;
}

.navbar .nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-speed);
}

.navbar .nav-links a:hover,
.navbar .nav-links a:focus {
  color: var(--primary-color);
}

.navbar .cta-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.navbar .cta-button:hover,
.navbar .cta-button:focus {
  background-color: var(--secondary-color);
  box-shadow: 0px 4px 15px rgba(255, 165, 0, 0.5);
  outline: none;
}

.toggle-theme {
  margin-left: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--text-color);
  transition: color var(--transition-speed);
}

.toggle-theme:hover,
.toggle-theme:focus {
  color: var(--primary-color);
}

/* Hamburger Menu (Mobile) */
.hamburger-menu {
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('assets/hero-bg.jpg') no-repeat center center/cover;
  text-align: center;
  padding: 0 20px;
  position: relative;
}

.hero h1 {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero .cta-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.hero .cta-button:hover,
.hero .cta-button:focus {
  background-color: var(--secondary-color);
  box-shadow: 0px 4px 15px rgba(255, 165, 0, 0.5);
  outline: none;
}

.hero .cta-button:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

/* Background Graphics */
.hero-bg-graphic {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: url('assets/hero-graphic.svg') no-repeat center center/cover;
  pointer-events: none;
}

.portfolio-gallery::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 165, 0, 0.1);
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.resources-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 165, 0, 0.05);
  z-index: -1;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
}

/* Main Content */
main {
  margin-top: 80px; /* Compensa a altura da navbar fixa */
}

/* Sobre Nós Section */
.about-section {
  padding: 60px 20px;
  text-align: center;
  background-color: var(--light-background);
  color: var(--dark-background);
  position: relative;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.about-text {
  flex: 1 1 400px;
  padding: 20px;
}

.about-text h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.6;
}

.about-image {
  flex: 1 1 400px;
  padding: 20px;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
  transition: transform var(--transition-speed);
}

.about-image img:hover {
  transform: scale(1.05);
}

/* Services Section */
.services-section {
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

.services-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.service-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service-box {
  background-color: var(--dark-background);
  margin: 20px;
  padding: 30px 20px;
  border-radius: 20px;
  flex: 1 1 300px;
  max-width: 300px;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed), background-color var(--transition-speed);
  position: relative;
  z-index: 1;
}

.service-box i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.service-box h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.service-box p {
  font-size: 1rem;
}

.service-box:hover {
  transform: scale(1.05);
  background-color: var(--secondary-color);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

/* Portfólio Section */
.portfolio-section {
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

.portfolio-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.portfolio-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.portfolio-item {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  transition: transform var(--transition-speed);
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-color);
  width: 100%;
  transform: translateY(100%);
  transition: transform var(--transition-speed);
  padding: 10px;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

/* Recursos Section */
.resources-section {
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

.resources-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.resources-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.resource-item {
  background-color: var(--dark-background);
  margin: 20px;
  padding: 30px 20px;
  border-radius: 20px;
  flex: 1 1 250px;
  max-width: 250px;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed), background-color var(--transition-speed);
  position: relative;
  z-index: 1;
}

.resource-item i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.resource-item h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.resource-item p {
  font-size: 1rem;
}

.resource-item:hover {
  transform: scale(1.05);
  background-color: var(--secondary-color);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

/* Portfólio Carousel (Swiper) */
.swiper-container.portfolio-carousel {
  width: 100%;
  padding: 20px 0;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
}

.swiper-slide {
  background: var(--dark-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Depoimentos Section */
.testimonials-section {
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

.testimonials-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.swiper-container.testimonial-carousel {
  width: 100%;
  padding: 20px 0;
}

.swiper-wrapper-testimonials {
  display: flex;
  align-items: center;
}

.swiper-slide-testimonials {
  background: var(--dark-background);
  padding: 30px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform var(--transition-speed);
}

.swiper-slide-testimonials p {
  font-style: italic;
  margin-bottom: 15px;
}

.swiper-slide-testimonials span {
  font-weight: bold;
  color: var(--primary-color);
}

.swiper-slide-testimonials:hover {
  transform: scale(1.05);
}

/* FAQ Section */
.faq-section {
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

.faq-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.faq-item {
  background-color: var(--dark-background);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.faq-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;
}

.faq-item p {
  display: none;
  font-size: 1rem;
}

.faq-item.active p {
  display: block;
}

.faq-item:hover {
  background-color: var(--secondary-color);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

/* Contact Section */
.contact-section {
  padding: 60px 20px;
  text-align: center;
  background-color: var(--dark-background);
}

.contact-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--text-color);
}

.contact-section form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-section .form-group {
  width: 100%;
  margin-bottom: 15px;
}

.contact-section label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-section input,
.contact-section textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: var(--text-color);
  transition: border-color var(--transition-speed);
}

.contact-section input:focus,
.contact-section textarea:focus {
  border-color: var(--primary-color);
  outline: none;
}

.contact-section .consent {
  display: flex;
  align-items: center;
}

.contact-section .consent input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.contact-section button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.contact-section button:hover,
.contact-section button:focus {
  background-color: var(--secondary-color);
  box-shadow: 0px 4px 15px rgba(255, 165, 0, 0.5);
  outline: none;
}

.contact-section button:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

/* Footer */
footer {
  background-color: var(--dark-background);
  padding: 20px;
  text-align: center;
  color: var(--text-color);
}

.footer-nav a {
  color: var(--text-color);
  margin: 0 10px;
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-speed);
}

.footer-nav a:hover,
.footer-nav a:focus {
  color: var(--primary-color);
}

/* Back to Top Button */
#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  display: none;
  z-index: 1000;
  transition: background-color var(--transition-speed), transform var(--transition-speed), opacity var(--transition-speed);
}

#backToTop:hover,
#backToTop:focus {
  background-color: var(--secondary-color);
  transform: scale(1.1);
  outline: none;
}

#backToTop i {
  font-size: 1.2rem;
}

/* Swiper Carousel Styles */
.swiper-container {
  width: 100%;
  padding: 20px 0;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
}

.swiper-slide {
  background: var(--dark-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Carousel de Depoimentos */
.swiper-container-testimonial-carousel {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide-testimonials {
  background: var(--dark-background);
  padding: 30px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform var(--transition-speed);
}

.swiper-slide-testimonials p {
  font-style: italic;
  margin-bottom: 15px;
}

.swiper-slide-testimonials span {
  font-weight: bold;
  color: var(--primary-color);
}

.swiper-slide-testimonials:hover {
  transform: scale(1.05);
}

/* Carousel Navigation Buttons */
.swiper-button-next-portfolio,
.swiper-button-prev-portfolio,
.swiper-button-next-testimonials,
.swiper-button-prev-testimonials {
  color: var(--primary-color);
}

.swiper-pagination-portfolio,
.swiper-pagination-testimonials {
  bottom: 10px !important;
}

.swiper-pagination-bullet {
  background: var(--primary-color);
}

.swiper-pagination-bullet-active {
  background: var(--secondary-color);
}

/* Hamburger Menu (Mobile) */
.hamburger-menu {
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
}

@media (max-width: 1024px) {
  .about-content {
    flex-direction: column;
  }

  .navbar .nav-links {
    display: none;
    flex-direction: column;
    background-color: rgba(17, 17, 17, 0.95);
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    border-radius: 10px;
  }

  .navbar .nav-links li {
    margin: 15px 0;
  }

  .hamburger-menu {
    display: block;
  }

  .navbar .nav-links.active {
    display: flex;
  }
}

@media (max-width: 768px) {
  .service-boxes,
  .resources-list {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .services-section,
  .portfolio-section,
  .resources-section,
  .testimonials-section,
  .faq-section,
  .about-section,
  .contact-section {
    padding: 40px 10px;
  }
  
  .cta-button {
    width: 100%;
    margin-top: 10px;
  }

  .navbar .nav-links {
    width: 100%;
    top: 60px;
    right: 0;
  }

  .navbar .nav-links.active {
    display: flex;
  }
}

