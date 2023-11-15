import { Button, Stack } from "@mui/material";
import React from "react";
import Choice from "../models/enums/Choice";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const botChoice = (): Choice => {
  const choices = ["pierre", "feuille", "ciseaux"];
  return choices[getRandomInt(3)] as Choice;
};

interface ChoicesComponentProps {
  computeResult: (playerChoice: Choice, botChoice: Choice) => void;
}

const ChoicesComponent: React.FC<ChoicesComponentProps> = ({
  computeResult,
}) => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.PIERRE, botChoice())}
        >
          Pierre
        </Button>
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.FEUILLE, botChoice())}
        >
          Feuille
        </Button>
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.CISEAUX, botChoice())}
        >
          Ciseaux
        </Button>
      </Stack>
    </>
  );
};

export default ChoicesComponent;
