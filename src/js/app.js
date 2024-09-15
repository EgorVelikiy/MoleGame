class holeWidget {
  constructor(element) {
    this._element = element;
    this.currInd = -1;
    this.prevInd = -1;
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

    const hole = this.getHole(index);
    hole.appendChild(mole);
  }

  removeMole() {
    document.querySelector(".mole").remove();
  }

  nextHole() {
    setInterval(() => {
      do {
        this.currInd = Math.floor(Math.random() * 16);
      } while (this.currInd === this.prevInd);

      if (this.prevInd >= 0) {
        this.removeMole(this.prevInd);
      }

      this.addMole(this.currInd);
      this.prevInd = this.currInd;
    }, 1000);
  }
}

const start = new holeWidget(document.querySelector(".hole-game"));
start.nextHole();
