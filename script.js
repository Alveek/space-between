let levels = [
  {
    level: 1,
    positions: `<div style="justify-content: start;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: start;" class="box ship-box">
              <div class="ship"></div>
            </div>`,
    solution: "end",
    speed: 1000
  },
  {
    level: 2,
    positions: `<div style = "justify-content: end;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: end;" class="box ship-box">
              <div class="ship"></div>
              
            </div>`,
    solution: "start",
    speed: 1000
  },
  {
    level: 3,
    positions: `<div style = "" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="empty"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: start;" class="box ship-box">
              <div class="ship"></div>
            </div>`,
    solution: "center",
    speed: 1000
  },
  {
    level: 4,
    positions: `<div style = "justify-content: center;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: center;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
           
            </div>`,
    solution: "space-between",
    speed: 1700
  },
  {
    level: 5,
    positions: `<div style = "justify-content: start;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: space-between;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "end",
    speed: 1000
  },
  {
    level: 6,
    positions: `<div style = "justify-content: space-between;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: end;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "space-evenly",
    speed: 1700
  },
  {
    level: 7,
    positions: `<div style = "justify-content: end;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: space-evenly;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "start",
    speed: 1000
  },
  {
    level: 8,
    positions: `<div style = "justify-content: start;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: start;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "end",
    speed: 1000
  },
  {
    level: 9,
    positions: `<div style = "justify-content: space-evenly;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: end;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "space-between",
    speed: 1700
  },
  {
    level: 10,
    positions: `<div style = "justify-content: space-between;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: space-between;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "center",
    speed: 700
  },
  {
    level: 11,
    positions: `<div style = "justify-content: end;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: center;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "start",
    speed: 700
  },
  {
    level: 12,
    positions: `<div style = "justify-content: start;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: start;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "end",
    speed: 650
  },
  {
    level: 13,
    positions: `<div style = "justify-content: space-between;" class="box asteroid-box">
              <div class="asteroid"></div>
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: end;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "center",
    speed: 650
  },
  {
    level: 14,
    positions: `<div style = "justify-content: end;" class="box asteroid-box">
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: center;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "start",
    speed: 650
  },
  {
    level: 15,
    positions: `<div style = "justify-content: start;" class="box asteroid-box">
              <div class="asteroid"></div>
            </div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div class="box block"></div>
            <div style = "justify-content: start;" class="box ship-box">
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
              <div class="ship"></div>
            </div>`,
    solution: "end",
    speed: 600
  }
];

const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const userInput = document.querySelector("#user-input");
const levelOutput = document.querySelector(".stats-level-output");
const levelsLengthOutput = document.querySelector(".levels-length-output");
const hp = document.querySelector(".hp");
// btn.focus();

let level = 0;
let hearts = 3;
let won = false;
let userChoice = "";

levelsLengthOutput.textContent = levels.length;

// Переход к след уровню
function generateLevel(level) {
  userInput.value = "";

  if (level < levels.length) {
    container.innerHTML = levels[level].positions;
  }
}

function play() {
  if (level < levels.length && document.querySelector(".full-heart") !== null) {
    levelOutput.textContent = level + 1;

    let destroy = setInterval(function() {
      document.querySelector(".block").remove();

      if (document.querySelector(".block") == null && won === false) {
        // LOSE
        document.querySelector(".heart").remove();
        document
          .querySelector(".hp")
          .insertAdjacentHTML(
            "beforeend",
            `<i class="nes-icon heart is-empty"></i>`
          );

        clearInterval(destroy);

        won = false;
        level++;
        hearts--;
        setTimeout(function() {
          generateLevel(level);
          play();
        }, 800);
      } else if (document.querySelector(".block") == null && won === true) {
        // WIN
        clearInterval(destroy);

        won = false;
        level++;
        setTimeout(function() {
          generateLevel(level);
          play();
        }, 800);
      }
    }, levels[level].speed);
  } else {
    // GAME OVER
    stopGame();
  }
}

// Manipulating ships through input
userInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    const ships = document.querySelector(".ship-box");
    ships.style.justifyContent = userInput.value;
    userChoice = userInput.value;
    if (
      userInput.value === levels[level].solution &&
      document.querySelector(".block") !== null
    ) {
      won = true;
    }

    userInput.value = "";
  }
});

// Start a game
btn.addEventListener("click", event => {
  startGame();
});

function startGame() {
  hp.innerHTML = `
    <i class="nes-icon heart full-heart"></i>
		<i class="nes-icon heart full-heart"></i>
    <i class="nes-icon heart full-heart"></i>
  `;

  level = 0;
  hearts = 3;
  won = false;
  userInput.disabled = false;
  userInput.focus();
  generateLevel(level);

  play();
}

function stopGame() {
  userInput.disabled = true;

  container.innerHTML = `<div class="play-again-page">
			<div>${level >= 12 && hearts > 0 ? "ОТЛИЧНАЯ РАБОТА!" : "GAME OVER"}</div>
			<button id="play-again-btn" class="nes-btn is-warning">Играть Снова</button>
        <div class="credits">
        <h3>CREDITS</h3>
        <p>Background visuals <br> by <a href="https://ericaofanderson.com/" target="_blank">Erica Anderson</a></p>
        <p>Images from <a href="https://www.freepik.com/" target="_blank">freepik.com</a></p>
        <p>CSS framework - <a href="https://nostalgic-css.github.io/NES.css/" target="_blank">NES CSS</a></p>
        </div>
      </div>
      `;

  const playAgainBtn = document.querySelector("#play-again-btn");
  playAgainBtn.focus();

  playAgainBtn.addEventListener("click", event => {
    startGame();
  });
}
