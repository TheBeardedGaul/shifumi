import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import RulesComponent from "../components/RulesComponent";
import ScoringComponent from "../components/ScoringComponent";
import Choice from "../models/enums/Choice";
import ChoicesComponent from "../components/ChoicesComponent";
import HistoryComponent from "../components/HistoryComponent";
import Game from "../engine/Game";

function ShifumiPage() {
  const [history, setHistory] = React.useState<Game[]>([]);

  function computeResult(userChoice: Choice) {
    const game = new Game(userChoice);
    const newHistory = [...history];
    newHistory.push(game);
    setHistory(newHistory);
  }

  let lastGame;
  if (history.length > 0) {
    lastGame = history[history.length - 1];
  }

  return (
    <>
      <RulesComponent />
      <ScoringComponent history={history} />
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
