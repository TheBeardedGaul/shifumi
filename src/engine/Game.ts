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
    let result = Result.DRAW;
    if (playerChoice === Choice.PIERRE) {
      switch (botChoice) {
        case Choice.PIERRE:
          result = Result.DRAW;
          break;
        case Choice.FEUILLE:
          result = Result.LOSE;
          break;
        case Choice.CISEAUX:
          result = Result.WIN;
          break;
      }
    }
    if (playerChoice === Choice.FEUILLE) {
      switch (botChoice) {
        case Choice.PIERRE:
          result = Result.WIN;
          break;
        case Choice.FEUILLE:
          result = Result.DRAW;
          break;
        case Choice.CISEAUX:
          result = Result.LOSE;
          break;
      }
    }
    if (playerChoice === Choice.CISEAUX) {
      switch (botChoice) {
        case Choice.PIERRE:
          result = Result.LOSE;
          break;
        case Choice.FEUILLE:
          result = Result.WIN;
          break;
        case Choice.CISEAUX:
          result = Result.DRAW;
          break;
      }
    }
    return result;
  }
}

export default Game;
