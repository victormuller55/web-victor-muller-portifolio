function initAnimations() {
  // About
  const about = document.querySelector(".about-container");
  if (about) {
    const aboutObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          about.classList.add("animate");
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    aboutObserver.observe(about);
  }

  const socialIcons = document.querySelectorAll(
    ".about-container .social-div-about"
  );

  if (socialIcons.length > 0) {
    const iconsObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          socialIcons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.add("animate"); // dispara a animação de cada ícone em sequência
            }, index * 200); // 200ms entre cada ícone
          });
          observer.disconnect(); // anima apenas uma vez
        }
      },
      { threshold: 0.2 }
    );

    iconsObserver.observe(socialIcons[0]); // observa o primeiro ícone apenas
  }

  // Linguagens
  const container = document.querySelector(".linguagens-container");

  if (container) {
    const linguagensObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = container.querySelectorAll(".lingagem-div");
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add("animate"), index * 150);
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.2 }
    );

    linguagensObserver.observe(container);
  }


  // Cards de projeto
  const cards = document.querySelectorAll(".card-projeto");
  if (cards.length > 0) {
    const cardsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => cardsObserver.observe(card));
  }

  // Timeline cards
  const timelineCards = document.querySelectorAll(".timeline-card");
  if (timelineCards.length > 0) {
    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // adiciona classe de animação
            observer.unobserve(entry.target); // anima uma vez
          }
        });
      },
      { threshold: 0.2 }
    );
    timelineCards.forEach((card) => timelineObserver.observe(card));
  }

  const timelineTitle = document.querySelector(".title-timeline");
  const timelineHR = document.querySelector(".hr-timeline");

  if (timelineTitle && timelineHR) {
    const timelineObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          timelineTitle.classList.add("show");
          timelineHR.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    // Observa apenas o título, mas anima HR também
    timelineObserver.observe(timelineTitle);
  }

  const contactTitle = document.querySelector(".title-contact");
  const contactHR = document.querySelector(".hr-contact");

  if (contactTitle && contactHR) {
    const contactObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          contactTitle.classList.add("show");
          contactHR.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    // Observa apenas o título, mas anima HR também
    contactObserver.observe(contactTitle);
  }

  // Cards de contato
  const contactCards = document.querySelectorAll(".card-contact");
  if (contactCards.length > 0) {
    const cardsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adiciona fade in em sequência
            contactCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 200); // cada card aparece com 200ms de diferença
            });
            observer.disconnect(); // anima apenas uma vez
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsObserver.observe(contactCards[0]); // observa o primeiro card apenas
  }

  // Navbar: transparente na primeira section, ganha cor com fade ao rolar
  const nav = document.getElementById("main-nav");
  const firstSection = document.querySelector(".floating-symbols");

  function updateNavbarScroll() {
    if (!nav || !firstSection) return;
    const firstHeight = firstSection.offsetHeight;
    if (window.scrollY >= firstHeight - 1) {
      nav.classList.add("navbar-scrolled");
    } else {
      nav.classList.remove("navbar-scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbarScroll, { passive: true });
  updateNavbarScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnimations);
} else {
  initAnimations();
}
