import { Stack, Typography } from "@mui/material";
import React from "react";
import Game from "../engine/Game";
import Result from "../models/enums/Result";

interface ScoringComponentProps {
  history: Game[];
}

const ScoringComponent: React.FC<ScoringComponentProps> = ({ history }) => {
  const userScoring = history.filter(
    (element) => element.result === Result.WIN
  ).length;
  const botScoring = history.filter(
    (element) => element.result === Result.LOSE
  ).length;
  return (
    <>
      <Stack spacing={2} direction="row">
        {`${userScoring} - ${botScoring}`}
      </Stack>
      {userScoring - botScoring > 0 && (
        <Stack spacing={2} direction="row">
          <Typography variant="h5">Vous êtes en tête !</Typography>
        </Stack>
      )}
    </>
  );
};

export default ScoringComponent;
