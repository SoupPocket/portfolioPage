import React from "react";
import paperHand from "../images/paper-hand.png"
import rockHand from "../images/rock-hand.png"
/* import scissorsHand from "../images/scissors-hand.png" */
import scissorsHand from "../images/scissors-hand.png"
const ScoreBoard = ({ userChoice, userOutcome, computerOutcome, computerChoice, userScore, computerScore }) => {

  console.log(scissorsHand);
  const getHandImage = (choice) => {
    const selectedHand = choice === "rock" ? rockHand.src : choice === "paper" ? paperHand.src : scissorsHand.src;
    return selectedHand;
  };

  return(
    <div className="w-1/3 border border-4 border-white rounded-md text-center relative">
      <div>
        <div className="badge bg-red-700 text-black">user</div>
          <img
            src={getHandImage(userChoice)} 
            alt=""
            className="h-28 w-28"
          />
      </div>
      <div> 
        <div className="badge">comp</div>
        <img
          src={getHandImage(computerChoice)} 
          alt=""
          className="h-28 w-28"
        />
      </div>
      <span id="user-score">{userScore}</span> : <span id="computer-score">{computerScore}</span>
    </div>
  )
}

export default ScoreBoard;
