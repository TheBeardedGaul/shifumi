import React from "react";
import Game from "../models/interfaces/Game";
import GameItemComponent from "./GameItemComponent";

interface HistoryComponentProps {
  history: Game[];
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({ history }) => {
  return (
    <>
      {history.map((game, index) => {
        return <GameItemComponent key={index} game={game} />;
      })}
    </>
  );
};

export default HistoryComponent;
