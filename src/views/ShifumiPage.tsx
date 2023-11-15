import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import RulesComponent from "../components/RulesComponent";
import ScoringComponent from "../components/ScoringComponent";
import Choice from "../models/enums/Choice";
import Result from "../models/enums/Result";
import ChoicesComponent from "../components/ChoicesComponent";
import HistoryComponent from "../components/HistoryComponent";
import Game from "../engine/Game";

function ShifumiPage() {
  const [history, setHistory] = React.useState<Game[]>([]);
  const [userScoring, setUserScoring] = React.useState<number>(0);
  const [botScoring, setBotScoring] = React.useState<number>(0);

  function computeResult(userChoice: Choice) {
    const game = new Game(userChoice);
    const newHistory = history;
    newHistory.push(game);
    if (game.result === Result.WIN) {
      setUserScoring(userScoring + 1);
    }
    if (game.result === Result.LOSE) {
      setBotScoring(botScoring + 1);
    }
    setHistory(newHistory);
  }

  let lastGame;
  if (history.length > 0) {
    lastGame = history[history.length - 1];
  }

  return (
    <>
      <RulesComponent />
      <ScoringComponent botScoring={botScoring} userScoring={userScoring} />
      <ChoicesComponent computeResult={computeResult} />
      <Stack spacing={2} direction="row">
        <Typography variant="h5">Joueur : {lastGame?.playerChoice}</Typography>
        <Typography variant="h5">Ordinateur : {lastGame?.botChoice}</Typography>
      </Stack>
      <HistoryComponent history={history} />
    </>
  );
}

export default ShifumiPage;
