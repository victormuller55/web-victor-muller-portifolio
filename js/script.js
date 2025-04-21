// ------------ HEADER ------------

function isElementInViewport(elem) {
  var $elem = $(elem);
  var windowHeight = $(window).height();
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + windowHeight;
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$(window).scroll(function () {
  if (isElementInViewport($("#div-about-me"))) {
    $("#div-about-me").addClass("active");
  }

  if (isElementInViewport($(".linguages"))) {
    $(".linguages").addClass("active");
  }

  if (isElementInViewport($(".card-project"))) {
    $(".card-project").addClass("active");
  }

  if (isElementInViewport($("#experiences"))) {
    $("#experiences").addClass("active");
  }

  if (isElementInViewport($("#contact"))) {
    $("#contact").addClass("active");
  }
});

// Escreve Victor Muller na Home

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

// Coloca cor no Header ao Scroll

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

window.onload = adicionarCaractere;

// ------------ ABOUT ------------

// Ajusta Texto About Me ao tamanho da tela

function adjustTextAlignment() {
  var aboutMeText = document.getElementById("text-about-me");
  var aboutMeDiv = document.getElementById("div-about-me");

  if (window.innerWidth < 980) {
    aboutMeText.classList.add("text-center");
    aboutMeText.classList.add("ml-3");
    aboutMeText.classList.add("mr-3");

    aboutMeText.classList.remove("text-left");
    aboutMeText.classList.remove("ml-5");

    aboutMeDiv.classList.remove("w-50");
  } else {
    aboutMeText.classList.remove("text-center");
    aboutMeText.classList.remove("ml-3");
    aboutMeText.classList.remove("mr-3");

    aboutMeText.classList.add("text-left");
    aboutMeText.classList.add("ml-5");

    aboutMeDiv.classList.add("w-50");
  }
}

adjustTextAlignment();
window.addEventListener("resize", adjustTextAlignment);
