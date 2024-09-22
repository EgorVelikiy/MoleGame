import "./btns.css";

export class ButtonWidget {
  constructor(start, end, startGameHandler, endGameHandler) {
    if (typeof start === "string") {
      start = document.querySelector(start);
    }

    this._start = start;

    if (typeof end === "string") {
      end = document.querySelector(end);
    }
    this.onStartBtnClick = this.onStartBtnClick.bind(this);
    this.onEndBtnClick = this.onEndBtnClick.bind(this);

    this._end = end;

    this._startGameHandler = startGameHandler;
    this._endGameHandler = endGameHandler;

    this._start.addEventListener("click", this.onStartBtnClick);
    this._end.addEventListener("click", this.onEndBtnClick);
  }

  onStartBtnClick(e) {
    if (this._start.className != "start_game start_game_started") {
      this._start.classList.add("start_game_started");
      this._startGameHandler();
    } else {
      e.preventDefault();
    }
  }

  onEndBtnClick() {
    if (this._start.classList.contains("start_game_started")) {
      this._endGameHandler();
      this._start.classList.remove("start_game_started");
    }
  }
}
