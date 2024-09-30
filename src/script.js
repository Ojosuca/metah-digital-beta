// GSAP Animation for Hero Section
gsap.from(".hero h2", { duration: 1, y: -50, opacity: 0, ease: "power2.inOut" });
gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.3, ease: "power2.inOut" });
gsap.from(".cta-button", { duration: 1, opacity: 0, scale: 0.5, delay: 0.6, ease: "elastic.out(1, 0.3)" });
