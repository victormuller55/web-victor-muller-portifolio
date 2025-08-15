  document.addEventListener("DOMContentLoaded", function () {
    const about = document.querySelector(".about-container");
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          about.classList.add("animate");
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(about);
  });

  
const linguagens = document.querySelectorAll('.lingagem-div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.parentElement.querySelectorAll('.lingagem-div');
      
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 150); // 150ms de atraso entre cada bloco
      });

      observer.unobserve(entry.target); // só roda uma vez
    }
  });
}, { threshold: 0.2 });

// Observa o primeiro item apenas, pois ele vai disparar todos os outros
if (linguagens.length > 0) {
  observer.observe(linguagens[0]);
}


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-projeto");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Evita animar de novo
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});