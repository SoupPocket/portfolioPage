"use client";
import React from "react";
import { useState } from "react";

import Buttons from "./Buttons.js";
import ScoreBoard from "./Scoreboard.js";
import { getComputerChoice } from "../utils/utils.js";

const RPSGame = () => {
  const [userChoice, setUserChoice] = useState("");
  const [userOutcome, setUserOutcome] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerOutcome, setComputerOutcome] = useState("");
  const [computerScore, setComputerScore] = useState(0);

  const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    switch (`${userChoice} ${computerChoice}`) {
      // user win case
      case "rock scissors":
      case "paper rock":
      case "scissors paper":
        setUserOutcome("win");
        setComputerOutcome("lose");
        setUserScore((prevState) => (
          prevState + 1
        ));
        break;
      // computer win case
      case "rock paper":
      case "paper scissors":
      case "scissors rock":
        setUserOutcome("lose");
        setComputerOutcome("win");
        setComputerScore((prevState) => (
          prevState + 1
        ));
        break;
      // tie case
      case "rock rock":
      case "scissors scissors":
      case "paper paper":
        setUserOutcome("draw");
        setComputerOutcome("draw");
        break;
    }
  };

  return (
    <div className="w-full h-full items-center flex justify-center flex-col gap-4">
      <header>
        <h1 className="text-2xl">Rock Paper Scissors</h1>
      </header>
      <ScoreBoard
        userOutcome={userOutcome}
        computerOutcome={computerOutcome}
        userChoice={userChoice}
        computerChoice={computerChoice}
        computerScore={computerScore}
        userScore={userScore}
      />
      <Buttons game={game} userOutcome={userOutcome} userChoice={userChoice} />

      <p id="action-message">Make your move</p>
    </div>
  );
};

export default RPSGame;
