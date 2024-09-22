import { Game } from "./components/game_widget/game";
import { CreateField } from "./components/create_field/Field_Creation";
import { ButtonWidget } from "./components/btns_widget/btnWidget";

const toCreate = new CreateField(4);
const game = new Game(".hole-game", toCreate.ctreation);

// eslint-disable-next-line no-unused-vars
const btnStart = new ButtonWidget(
  ".start_game",
  ".restart_game",
  game.startGame,
  game.endGame,
);
