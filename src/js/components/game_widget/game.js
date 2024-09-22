export class Game {
  constructor(element, fieldHandler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this.startGame = this.startGame.bind(this);
    this.getHole = this.getHole.bind(this);
    this.addMole = this.addMole.bind(this);
    this.removeMole = this.removeMole.bind(this);
    this.nextHole = this.nextHole.bind(this);
    this.endGame = this.endGame.bind(this);

    this._element = element;
    this.currInd = 0;
    this.prevInd = 0;
    this.flag = true;
    this.counter = 0;
    this.next = null;

    this._fieldHandler = fieldHandler;
  }

  startGame() {
    this.flag = true;
    this._fieldHandler();
    this.currInd = 0;
    this.prevInd = 0;
    this.nextHole();
  }

  getHole(index) {
    const holesArray = this._element.querySelectorAll(".hole");
    return holesArray[index];
  }

  addMole(index) {
    const mole = document.createElement("img");

    mole.src =
      "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png";
    mole.classList.add("mole");
    mole.onclick = () => {
      this.counter = 0;
    };
    const hole = this.getHole(index);
    hole.appendChild(mole);
  }

  removeMole() {
    this.counter += 1;
    document.querySelector(".mole").remove();
  }

  nextHole() {
    this.next = setInterval(() => {
      do {
        this.currInd = Math.floor(
          Math.random() * this._element.childElementCount,
        );
      } while (this.currInd === this.prevInd);

      if (document.querySelector(".mole")) {
        this.removeMole(this.prevInd);

        if (this.counter > 0) {
          let counteSkip = Number(document.querySelector(".lost").textContent);

          document.querySelector(".lost").textContent = counteSkip + 1;
          if (document.querySelector(".lost").textContent == 5) {
            this.endGame();
            alert("Вы проиграли");
          }
        }
      }

      if (
        document
          .querySelector(".start_game")
          .classList.contains("start_game_started")
      ) {
        this.addMole(this.currInd);
        this.prevInd = this.currInd;
      }
    }, 1000);
  }

  endGame() {
    clearInterval(this.next);
    this._element.replaceChildren();
    this.counter = 0;
    document.querySelector(".record").textContent = Math.max(
      Number(document.querySelector(".record").textContent),
      Number(document.querySelector(".dead").textContent),
    );
    document.querySelector(".dead").textContent = 0;
    document.querySelector(".lost").textContent = 0;
    document
      .querySelector(".start_game")
      .classList.remove("start_game_started");
  }
}
