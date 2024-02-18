// -------------- FUNCTIONS --------------

function getWindowSize() {
  var larguraTela =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var alturaTela =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  return { largura: larguraTela, altura: alturaTela };
}

function isElementInViewport(elem) {
  var $elem = $(elem);
  var windowHeight = $(window).height();
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + windowHeight;
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

// -------------- FUNCTIONS HTML --------------

function handleResize() {
  var windowSize = getWindowSize();

  const divAboutMe = document.querySelector("#div-about-me");
  const textAboutMe = document.querySelector("#text-about-me");

  if (windowSize.largura < 980) {
    divAboutMe.classList.remove("w-50");
    textAboutMe.classList.add("mr-4");
    textAboutMe.classList.add("ml-4");
  } else {
    divAboutMe.classList.add("w-50");
    textAboutMe.classList.remove("mr-4");
    textAboutMe.classList.remove("ml-4");
  }
}

function checkAndAnimate() {
  const elements = ["#about", "#linguages", "#experiences", "#contact", ".card-project"];

  elements.forEach(element => {
    const els = document.querySelectorAll(element);
    els.forEach(el => {
      if (isElementInViewport(el)) {
        el.classList.add(element.includes("card-project") ? "active" : "animate-show-2-sec");
      }
    });
  });
}

$(window).on("scroll", function () {
  checkAndAnimate();
});

$(document).ready(function () {
  var header = $(".header");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

const texto = "Victor Muller";
let index = 0;
const intervalo = 150;

function adicionarCaractere() {
  document.getElementById("texto-digitado").textContent += texto[index];
  index++;

  if (index < texto.length) {
    setTimeout(adicionarCaractere, intervalo);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
window.onload = adicionarCaractere;

window.addEventListener("resize", handleResize);
handleResize();
checkAndAnimate();