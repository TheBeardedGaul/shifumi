import { Stack, Typography } from "@mui/material";
import React from "react";
import Game from "../models/interfaces/Game";

interface GameItemComponentProps {
  game: Game;
}

const GameItemComponent: React.FC<GameItemComponentProps> = ({ game }) => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Typography variant="h5">
          {game.playerChoice} - {game.botChoice} : {game.result}
        </Typography>
      </Stack>
    </>
  );
};

export default GameItemComponent;
