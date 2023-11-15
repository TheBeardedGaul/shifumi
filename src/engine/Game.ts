import Choice from "../models/enums/Choice";
import Result from "../models/enums/Result";

class Game {
  private _playerChoice: Choice;
  private _botChoice?: Choice;
  private _result?: Result;

  constructor(playerChoice: Choice) {
    this._playerChoice = playerChoice;
    this._result = this.result;
  }

  get playerChoice(): Choice {
    return this._playerChoice;
  }

  get botChoice(): Choice {
    if (!this._botChoice) {
      this._botChoice = this.shuffleBotChoice();
    }
    return this._botChoice;
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  private shuffleBotChoice(): Choice {
    const choices = ["pierre", "feuille", "ciseaux"];
    return choices[this.getRandomInt(3)] as Choice;
  }

  get result(): Result {
    if (!this._botChoice) {
      this._botChoice = this.botChoice;
    }
    this._result = this.computeResult(this.playerChoice, this._botChoice);
    return this._result;
  }

  private computeResult(playerChoice: Choice, botChoice: Choice): Result {
    if (playerChoice === botChoice) {
      return Result.DRAW;
    }
    if (
      (playerChoice === Choice.PIERRE && botChoice === Choice.CISEAUX) ||
      (playerChoice === Choice.FEUILLE && botChoice === Choice.PIERRE) ||
      (playerChoice === Choice.CISEAUX && botChoice === Choice.FEUILLE)
    ) {
      return Result.WIN;
    }

    return Result.LOSE;
  }
}

export default Game;
