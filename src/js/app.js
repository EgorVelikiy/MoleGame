class holeWidget {
  constructor(element, rows) {
    this._element = element;
    this.currInd = 0;
    this.prevInd = 0;
    this.counterWin = 0;
    this.counterLose = 3;
    this.record = 0;
    this.holes = rows * 4
    this.flag = true
  }

  startGame() {
    this.flag = true
    for (let i = 0; i < this.holes; i++) {
      const hole = document.createElement('div')
      hole.classList.add('hole')
      this._element.appendChild(hole)
    }
    const holesArray = this._element.querySelectorAll(".hole");
    holesArray.forEach((hole) => {
      hole.onclick = () => {
        if (hole.firstChild) {
          this.counterWin += 1
          this.removeMole();
        } else {
          this.counterLose -= 1
          if (this.counterLose == 0) {
            alert('Вы проиграли')
            if(this.counterWin > this.record) {
              this.record = this.counterWin;
              alert(`Вы побили свой рекорд - ${this.counterWin}`)
              document.querySelector('.record').textContent = this.record
            }
            this.counterLose = 3;
            this.counterWin = 0;
          }
        }
        document.querySelector('.dead').textContent = this.counterWin;
        document.querySelector('.lost').textContent = this.counterLose;
      }
    })
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

    }
    const hole = this.getHole(index);
    hole.appendChild(mole);
  }

  removeMole() {
    document.querySelector(".mole").remove();
  }

  nextHole() {
    const next = setInterval(() => {
      do {
        this.currInd = Math.floor(Math.random() * this.holes);
      } while (this.currInd === this.prevInd);

      if (document.querySelector('.mole')) {
        this.removeMole(this.prevInd);
      }
      if (this.flag === false) {
        this._element.replaceChildren()
        clearInterval(next)
        return
      }
      this.addMole(this.currInd);
      this.prevInd = this.currInd;
    }, 1000);
  }

  endGame() {
    this.flag = false;
    document.querySelector('.record').textContent = this.counterWin
    this.record = this.counterWin
    this.counterLose = 3;
    this.counterWin = 0;
    document.querySelector('.dead').textContent = this.counterWin;
    document.querySelector('.lost').textContent = this.counterLose;
  }
}


const start = document.querySelector('.start_game')
let game = new holeWidget(document.querySelector('.hole-game'), 5)
start.addEventListener('click', (e) => {
  if (start.className != 'start_game start_game_started') {
    start.classList.add('start_game_started')
    game.startGame()
  } else {
    e.preventDefault()
  }
})


const restart = document.querySelector('.restart_game')

restart.addEventListener('click', () => {
  if (start.classList.contains = 'start_game_started') {
    game.endGame()
    start.classList.remove('start_game_started')
  }
})