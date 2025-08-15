const symbols = document.querySelectorAll(".floating-symbols span");
const width = window.innerWidth;
const height = window.innerHeight;

function initializeSymbols() {
  symbols.forEach((symbol) => {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;
    const randomSize = Math.random() * 0.7 + 0.8;
    const randomDuration = Math.random() * 15 + 10;

    symbol.style.setProperty("--x-start", `${randomX}px`);
    symbol.style.setProperty("--y-start", `${randomY}px`);
    symbol.style.setProperty(
      "--x-mid",
      `${randomX + (Math.random() * 200 - 100)}px`
    );
    symbol.style.setProperty(
      "--y-mid",
      `${randomY + (Math.random() * 200 - 100)}px`
    );
    symbol.style.setProperty(
      "--x-end",
      `${randomX + (Math.random() * 400 - 200)}px`
    );
    symbol.style.setProperty(
      "--y-end",
      `${randomY + (Math.random() * 400 - 200)}px`
    );
    symbol.style.fontSize = `${randomSize}rem`;
    symbol.style.animation = `moveRandom ${randomDuration}s linear infinite, fadeInOut ${randomDuration}s linear infinite`;
    symbol.style.opacity = "0.7";
  });
}

initializeSymbols();
