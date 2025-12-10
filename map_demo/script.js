const path = [
  { top: 15, left: 15, type: "house" },
  { top: 15, left: 135, type: "gift" },
  { top: 15, left: 255, type: "quiz" },
  { top: 135, left: 255, type: "money" },
  { top: 255, left: 255, type: "normal" }
];

let step = 0;

function movePlayer() {
  step = (step + 1) % path.length;

  anime({
    targets: "#player",
    top: path[step].top,
    left: path[step].left,
    rotate: [0, 360],
    duration: 700,
    easing: "easeInOutBack",
    scale: [
        { value: 1.3, duration: 200 },
        { value: 1, duration: 200 }
    ],
    complete: () => triggerTile(path[step].type)
});

  anime({
    targets: "#player",
    translateY: [
        { value: -4, duration: 800 },
        { value: 0, duration: 800 }
    ],
    loop: true,
    easing: "easeInOutSine"
});
}

function triggerTile(type) {
  if (type === "gift") alert("🎁 You found a gift!");
  if (type === "quiz") alert("❓ Quiz time!");
  if (type === "money") alert("💰 You got money!");
  if (type === "house") alert("🏠 Home safe zone!");
}

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  alert("🎲 Rolled: " + dice);

  let moves = dice;
  const interval = setInterval(() => {
    movePlayer();
    moves--;
    if (moves <= 0) clearInterval(interval);
  }, 750);
}
