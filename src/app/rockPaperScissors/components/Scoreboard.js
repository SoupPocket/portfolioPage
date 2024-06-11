import React from "react";
import paperHand from "../images/paper-hand.png"
import rockHand from "../images/rock-hand.png"
import Result from "./Result";
/* import scissorsHand from "../images/scissors-hand.png" */
import scissorsHand from "../images/scissors-hand.png"
const ScoreBoard = ({ userChoice, userOutcome, computerOutcome, computerChoice, userScore, computerScore }) => {

  console.log(scissorsHand);
  const getHandImage = (choice) => {
    const selectedHand = choice === "rock" ? rockHand.src : choice === "paper" ? paperHand.src : scissorsHand.src;
    return selectedHand;
  };

  const handPositionStyle = "absolute h-full flex flex-col justify-center items-center gap-2"

  return(
    <div className="w-1/3 p-14 flex flex-row h-1/3 border border-4 border-white rounded-md text-center relative items-center justify-center">
      <div className={`${handPositionStyle} -left-14`}> 
        <div className="badge">user</div>
        <img
          src={getHandImage(userChoice)} 
          alt=""
          className="h-28 w-28"
        />
      </div>
      <div className="gap-4 flex flex-col">
        <Result
          userOutcome={userOutcome}
          userChoice={userChoice}
          computerChoice={computerChoice}
        />
        <div className="text-4xl">
          <span id="user-score">{userScore}</span> : <span id="computer-score">{computerScore}</span>
        </div>
      </div>
      <div className={`${handPositionStyle} -right-14`}> 
        <div className="badge">comp</div>
        <img
          src={getHandImage(computerChoice)} 
          alt=""
          className="h-28 w-28"
        />
      </div>
      
    </div>
  )
}

export default ScoreBoard;
