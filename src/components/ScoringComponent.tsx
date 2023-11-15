import { Stack, Typography } from "@mui/material";
import React from "react";

interface ScoringComponentProps {
  botScoring: number;
  userScoring: number;
}

const ScoringComponent: React.FC<ScoringComponentProps> = ({
  botScoring,
  userScoring,
}) => {
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
