import { Button, Stack } from "@mui/material";
import React from "react";
import Choice from "../models/enums/Choice";

interface ChoicesComponentProps {
  computeResult: (playerChoice: Choice) => void;
}

const ChoicesComponent: React.FC<ChoicesComponentProps> = ({
  computeResult,
}) => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.PIERRE)}
        >
          Pierre
        </Button>
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.FEUILLE)}
        >
          Feuille
        </Button>
        <Button
          variant="contained"
          onClick={() => computeResult(Choice.CISEAUX)}
        >
          Ciseaux
        </Button>
      </Stack>
    </>
  );
};

export default ChoicesComponent;
