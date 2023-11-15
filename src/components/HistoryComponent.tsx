import React from "react";
import GameItemComponent from "./GameItemComponent";
import Game from "../engine/Game";

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
