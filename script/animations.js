function initAnimations() {
  const about = document.querySelector(".section-about");
  if (about) {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          about.classList.add("animate");
          about.classList.remove("exit");
        } else {
          about.classList.remove("animate");
          about.classList.add("exit");
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    aboutObserver.observe(about);
  }

  const socialIcons = document.querySelectorAll(".section-about .about-social-link");
  if (socialIcons.length > 0) {
    const iconsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          socialIcons.forEach((icon) => icon.classList.remove("exit"));
          socialIcons.forEach((icon, index) => {
            setTimeout(() => icon.classList.add("animate"), index * 200);
          });
        } else {
          socialIcons.forEach((icon) => {
            icon.classList.remove("animate");
            icon.classList.add("exit");
          });
        }
      },
      { threshold: 0.2 }
    );
    iconsObserver.observe(socialIcons[0]);
  }

  const skillsSection = document.querySelector(".skills-section");
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items = entry.target.querySelectorAll(".skill-card");
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate");
                item.classList.remove("exit");
              }, index * 150);
            });
          } else {
            items.forEach((item) => {
              item.classList.remove("animate");
              item.classList.add("exit");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    skillsObserver.observe(skillsSection);
  }

  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length > 0) {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            entry.target.classList.remove("exit");
          } else {
            entry.target.classList.remove("animate");
            entry.target.classList.add("exit");
          }
        });
      },
      { threshold: 0.2 }
    );
    projectCards.forEach((card) => cardsObserver.observe(card));
  }

  const timelineCards = document.querySelectorAll(".timeline-card");
  if (timelineCards.length > 0) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("exit");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("exit");
          }
        });
      },
      { threshold: 0.2 }
    );
    timelineCards.forEach((card) => timelineObserver.observe(card));
  }

  const timelineTitle = document.querySelector(".timeline-title");
  const timelineHR = document.querySelector(".timeline-hr");
  if (timelineTitle && timelineHR) {
    const timelineTitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timelineTitle.classList.add("show");
          timelineTitle.classList.remove("exit");
          timelineHR.classList.add("show");
          timelineHR.classList.remove("exit");
        } else {
          timelineTitle.classList.remove("show");
          timelineTitle.classList.add("exit");
          timelineHR.classList.remove("show");
          timelineHR.classList.add("exit");
        }
      },
      { threshold: 0.2 }
    );
    timelineTitleObserver.observe(timelineTitle);
  }

  const contactTitle = document.querySelector(".contact-title");
  const contactHR = document.querySelector(".contact-hr");
  if (contactTitle && contactHR) {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactTitle.classList.add("show");
          contactTitle.classList.remove("exit");
          contactHR.classList.add("show");
          contactHR.classList.remove("exit");
        } else {
          contactTitle.classList.remove("show");
          contactTitle.classList.add("exit");
          contactHR.classList.remove("show");
          contactHR.classList.add("exit");
        }
      },
      { threshold: 0.2 }
    );
    contactObserver.observe(contactTitle);
  }

  const contactCards = document.querySelectorAll(".contact-card");
  if (contactCards.length > 0) {
    const contactCardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
              card.classList.remove("exit");
            }, index * 200);
          });
        } else {
          contactCards.forEach((card) => {
            card.classList.remove("show");
            card.classList.add("exit");
          });
        }
      },
      { threshold: 0.2 }
    );
    contactCardsObserver.observe(contactCards[0]);
  }

  const nav = document.getElementById("main-nav");
  const heroBg = document.querySelector(".hero-bg");
  function updateNavbarScroll() {
    if (!nav || !heroBg) return;
    if (window.scrollY >= heroBg.offsetHeight - 1) {
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
