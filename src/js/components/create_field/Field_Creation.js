import "./hole.css";

export class CreateField {
  constructor(rows) {
    this.ctreation = this.ctreation.bind(this);

    this._element = document.querySelector(".hole-game");
    this.holes = rows ** 2 - (rows ** 2 % 2);
    this.record = 0;
  }

  ctreation() {
    this.counterWin = 0;
    for (let i = 0; i < this.holes; i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      this._element.appendChild(hole);
    }

    const holesArray = this._element.querySelectorAll(".hole");
    holesArray.forEach((hole) => {
      hole.onclick = () => {
        if (hole.firstChild) {
          this.counterWin += 1;
          document.querySelector(".mole").remove();
        } else {
          let counterLost = Number(document.querySelector(".lost").textContent);
          document.querySelector(".lost").textContent = counterLost + 1;
          if (document.querySelector(".lost").textContent == 5) {
            alert("Вы проиграли");
            if (this.counterWin > this.record) {
              this.record = this.counterWin;
              alert(`Вы побили свой рекорд - ${this.counterWin}`);
              document.querySelector(".record").textContent = this.record;
            }
            document.querySelector(".lost").textContent = 0;
            this.counterWin = 0;
          }
        }
        document.querySelector(".dead").textContent = this.counterWin;
      };
    });
  }
}
