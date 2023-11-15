import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import RulesComponent from "../components/RulesComponent";
import ScoringComponent from "../components/ScoringComponent";
import Choice from "../models/enums/Choice";
import Result from "../models/enums/Result";
import Game from "../models/interfaces/Game";
import ChoicesComponent from "../components/ChoicesComponent";

function getResult(playerChoice: Choice, botChoice: Choice): Game {
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
  return { playerChoice, botChoice, result };
}

function ShifumiPage() {
  const [currentChoice, setCurrentChoice] = React.useState<
    Choice | undefined
  >();
  const [currentBotChoice, setCurrentBotChoice] = React.useState<
    Choice | undefined
  >();
  const [history, setHistory] = React.useState<Game[]>([]);
  const [userScoring, setUserScoring] = React.useState<number>(0);
  const [botScoring, setBotScoring] = React.useState<number>(0);

  function computeResult(userChoice: Choice, botChoice: Choice) {
    const result = getResult(userChoice as Choice, botChoice as Choice);
    const newHistory = history;
    newHistory.push(result);
    if (result.result === Result.WIN) {
      setUserScoring(userScoring + 1);
    }
    if (result.result === Result.LOSE) {
      setBotScoring(botScoring + 1);
    }
    setHistory(newHistory);
    setCurrentBotChoice(botChoice);
    setCurrentChoice(userChoice);
  }

  return (
    <>
      <RulesComponent />
      <ScoringComponent botScoring={botScoring} userScoring={userScoring} />
      <ChoicesComponent computeResult={computeResult} />
      <Stack spacing={2} direction="row">
        <Typography variant="h5">
          Choix actuel du joueur : {currentChoice}
        </Typography>
        <Typography variant="h5">
          Choix actuel de l'ordinateur : {currentBotChoice}
        </Typography>
      </Stack>
      {history.map((game, index) => {
        return (
          <Stack spacing={2} direction="row">
            <Typography key={index} variant="h5">
              {game.playerChoice} - {game.botChoice} : {game.result}
            </Typography>
          </Stack>
        );
      })}
    </>
  );
}

export default ShifumiPage;
