// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Inicialização do AOS
  if (!prefersReducedMotion) {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  // Inicialização do VanillaTilt
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
 });

  // Inicialização do Swiper para o Carousel de Depoimentos
  const swiperTestimonials = new Swiper('.testimonial-carousel', {
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
    a11y: {
      prevSlideMessage: 'Slide Anterior',
      nextSlideMessage: 'Próximo Slide',
      paginationBulletMessage: 'Ir para o slide {{index}}',
    },
  });

  // Inicialização do Swiper para o Carousel de Portfólio
  const swiperPortfolio = new Swiper('.portfolio-carousel', {
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
    },
    a11y: {
      prevSlideMessage: 'Slide Anterior',
      nextSlideMessage: 'Próximo Slide',
      paginationBulletMessage: 'Ir para o slide {{index}}',
    },
  });

  if (!prefersReducedMotion) {
    // Animações GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Animação da Navbar
    gsap.from(".navbar", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out"
    });

    // Timeline para Seção Hero
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" })
      .from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.2, ease: "power2.out" }, "-=0.8")
      .from(".hero .cta-button", { duration: 1, opacity: 0, scale: 0.5, delay: 0.4, ease: "elastic.out(1, 0.75)" }, "-=0.5");

    // Animação das Seções com ScrollTrigger
    const sections = [
      { selector: ".services-section", target: ".service-box", x: 0, y: 50 },
      { selector: ".testimonials-section", target: ".swiper-slide-testimonials", x: -50, y: 0 },
      { selector: ".about-section", target: ".about-text", x: -100, y: 0 },
      { selector: ".about-section", target: ".about-image", x: 100, y: 0 },
      { selector: ".contact-section", target: ".contact-section", x: 0, y: 50 }
    ];

    sections.forEach(({ selector, target, x, y }) => {
      gsap.from(target, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
        },
        duration: 1,
        x: x,
        y: y,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
      });
    });
  }

  // Back to Top Button
  //const backToTopButton = document.getElementById('backToTop');

  /*window.addEventListener('scroll', () => {
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
  });*/

  // Toggle Theme (Dark/Light Mode) with Persistence
  const toggleThemeButton = document.querySelector('.toggle-theme');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'light-mode') {
    document.body.classList.add('light-mode');
    toggleThemeButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', theme);
    toggleThemeButton.innerHTML = theme === 'light-mode' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // FAQ Toggle with ARIA Attributes
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('p');

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all FAQs
      faqItems.forEach(i => {
        i.querySelector('button').setAttribute('aria-expanded', 'false');
        i.querySelector('p').hidden = true;
      });

      // Toggle current FAQ
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
        content.hidden = false;
        item.classList.add('active');
      } else {
        button.setAttribute('aria-expanded', 'false');
        content.hidden = true;
        item.classList.remove('active');
      }
    });
  });

  // Hamburger Menu Toggle (Mobile)
  const navLinks = document.querySelector('.nav-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });

  // Active Link Highlighting (Scroll Spy)
  const sectionsElements = document.querySelectorAll('section');
  const navLinksElements = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sectionsElements.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinksElements.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Enhanced Form Validation
  const form = document.querySelector('.contact-section form');
  const formGroups = document.querySelectorAll('.form-group');

  form.addEventListener('submit', function(e) {
    let isValid = true;

    formGroups.forEach(group => {
      const input = group.querySelector('input, textarea');
      const errorMessage = group.querySelector('.error-message');

      if (!input.checkValidity()) {
        isValid = false;
        errorMessage.textContent = input.validationMessage;
      } else {
        errorMessage.textContent = '';
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});
