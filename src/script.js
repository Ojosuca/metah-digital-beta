// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      preloader.style.display = 'none';
    });
  
    // Inicialização do AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  
    // Inicialização do VanillaTilt
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  
    // Animações GSAP
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação da Navbar
    gsap.from(".navbar", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out"
    });
  
    // Animação da Seção Hero
    gsap.from(".hero h1", {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out"
    });
    gsap.from(".hero p", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out"
    });
    gsap.from(".hero .cta-button", {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      delay: 0.4,
      ease: "elastic.out(1, 0.75)"
    });
  
    // Animação dos Serviços
    gsap.from(".service-box", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });
  
    // Animação do Portfólio
    gsap.from(".portfolio-item", {
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 80%",
      },
      duration: 1,
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  
    // Animação da Equipe
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });
  
    // Animação dos Depoimentos
    gsap.from(".testimonial", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 80%",
      },
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });
  
    // Animação da Seção de Contato
    gsap.from(".contact-section", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out"
    });
  
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Menu Toggle for Mobile
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('is-active');
    });
  });
  
