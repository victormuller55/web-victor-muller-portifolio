const section = document.querySelector(".floating-symbols");
const symbols = document.querySelectorAll(".floating-symbols span");
const width = window.innerWidth;
const height = window.innerHeight;

// Repulsão entre símbolos quando se aproximam
const REPEL_RADIUS = 65; // distância abaixo da qual se repelem
const REPEL_STRENGTH = 2.2; // força com que são jogados em direções opostas
const OFFSET_DECAY = 0.028; // o offset da colisão vai sumindo aos poucos

const symbolState = new Map();

function createStars() {
  const container = document.getElementById("stars-container");
  if (!container) return;

  const count = 140;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2.5 + 0.8; // pequenos e grandes (0.8px a 3.3px)
    const opacity = Math.random() * 0.6 + 0.2; // fracos e fortes (0.2 a 0.8)
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = opacity;
    container.appendChild(star);
  }
}

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
    symbol.style.setProperty("--mouse-dx", "0px");
    symbol.style.setProperty("--mouse-dy", "0px");
    symbol.style.fontSize = `${randomSize}rem`;
    symbol.style.animation = `moveRandom ${randomDuration}s linear infinite, fadeInOut ${randomDuration}s linear infinite`;
    symbol.style.opacity = "0.7";

    symbolState.set(symbol, { dx: 0, dy: 0 });
  });
}

function updateCollisions() {
  if (!section) return;

  const symbolArray = Array.from(symbols);
  const positions = symbolArray.map((s) => {
    const rect = s.getBoundingClientRect();
    return {
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
    };
  });

  for (let i = 0; i < symbolArray.length; i++) {
    for (let j = i + 1; j < symbolArray.length; j++) {
      const a = positions[i];
      const b = positions[j];
      const dx = b.centerX - a.centerX;
      const dy = b.centerY - a.centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < REPEL_RADIUS && distance > 0.1) {
        const stateA = symbolState.get(symbolArray[i]);
        const stateB = symbolState.get(symbolArray[j]);
        if (!stateA || !stateB) continue;

        const force = ((REPEL_RADIUS - distance) / REPEL_RADIUS) * REPEL_STRENGTH;
        const nx = dx / distance;
        const ny = dy / distance;

        stateA.dx -= nx * force;
        stateA.dy -= ny * force;
        stateB.dx += nx * force;
        stateB.dy += ny * force;
      }
    }
  }

  symbolArray.forEach((symbol) => {
    const state = symbolState.get(symbol);
    if (!state) return;

    state.dx *= 1 - OFFSET_DECAY;
    state.dy *= 1 - OFFSET_DECAY;
    if (Math.abs(state.dx) < 0.1) state.dx = 0;
    if (Math.abs(state.dy) < 0.1) state.dy = 0;

    symbol.style.setProperty("--mouse-dx", `${state.dx}px`);
    symbol.style.setProperty("--mouse-dy", `${state.dy}px`);
  });

  requestAnimationFrame(updateCollisions);
}

// Estrela cadente: risquinho curvo discreto no fundo, a cada 10 segundos
const SHOOTING_STAR_INTERVAL_MS = 10000;
const shootingStarEl = document.getElementById("shooting-star");

function triggerShootingStar() {
  if (!shootingStarEl) return;
  shootingStarEl.classList.remove("shoot");
  shootingStarEl.style.left = `${15 + Math.random() * 70}%`;
  shootingStarEl.style.top = `${15 + Math.random() * 70}%`;
  shootingStarEl.style.setProperty("--shoot-rotate", `${Math.random() * 360}deg`);
  void shootingStarEl.offsetWidth;
  shootingStarEl.classList.add("shoot");
}

if (shootingStarEl) {
  shootingStarEl.addEventListener("animationend", () => {
    shootingStarEl.classList.remove("shoot");
  });
  setTimeout(triggerShootingStar, 2000);
  setInterval(triggerShootingStar, SHOOTING_STAR_INTERVAL_MS);
}

createStars();
initializeSymbols();
requestAnimationFrame(updateCollisions);
