import Choice from "../enums/Choice";
import Result from "../enums/Result";

interface Game {
  playerChoice: Choice;
  botChoice: Choice;
  result: Result;
}

export default Game;
