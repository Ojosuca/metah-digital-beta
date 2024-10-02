// script.js

document.addEventListener('DOMContentLoaded', function() {
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

  // Inicialização do Swiper para o Carousel de Depoimentos
  var swiperTestimonials = new Swiper('.testimonial-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-testimonials',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-testimonials',
      prevEl: '.swiper-button-prev-testimonials',
    },
  });

  // Inicialização do Swiper para o Carousel de Portfólio
  var swiperPortfolio = new Swiper('.portfolio-carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-portfolio',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-portfolio',
      prevEl: '.swiper-button-prev-portfolio',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    }
  });

  // Animações GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

  // Animação das Caixas de Serviço
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

  // Animação dos Depoimentos
  gsap.from(".swiper-slide-testimonials", {
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

  // Animação da Seção Sobre Nós
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
  });
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out"
  });

  // Back to Top Button
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
      gsap.to(backToTopButton, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(backToTopButton, { opacity: 0, duration: 0.5, onComplete: () => {
        backToTopButton.style.display = 'none';
      }});
    }
  });

  backToTopButton.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true }, ease: "power2.out" });
  });

  // Toggle Theme (Dark/Light Mode)
  const toggleThemeButton = document.querySelector('.toggle-theme');
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleThemeButton.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // FAQ Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      faqItems.forEach(i => i.classList.remove('active'));
      item.classList.toggle('active');
    });
  });

  // Hamburger Menu Toggle (Mobile)
  const navLinks = document.querySelector('.nav-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });
});

