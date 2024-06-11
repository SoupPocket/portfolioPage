import React from "react";
import paperHand from "../images/paper-hand.png"
import rockHand from "../images/rock-hand.png"
import scissorsHand from "../images/scissors-hand.png"


const Buttons = ({ game, userOutcome, userChoice }) => {

    const getButtonClass = (choice) => {
      if(choice === userChoice) {
        return userOutcome;
      }
      return ""
    }
    const imageClass = (choice) => {
      const getBorderColor = () => {
        if (choice === userChoice) {
          switch(userOutcome) {
            case "win":
              return "border-green-700";
            case "lose":
              return "border-red-700";
            default:
              return "border-black";
          }
        }
      }
      const borderColor = getBorderColor();
      return (
        `h-32 w-32 border-4 ${borderColor} rounded-full`
      )
    }

    return(
        <div className="flex flex-row gap-2">
          <button>
            <img 
              src={rockHand.src}
              alt="rock"
              id="rock"
              className={imageClass('rock')}
              onClick={() => game("rock")} 
            />
          </button>
          <button>
            <img 
              src={paperHand.src} 
              alt="paper" 
              id="paper" 
              className={imageClass('paper')}
              onClick={() => game("paper")}
            />
          </button>
          <button>
            <img 
              src={scissorsHand.src}
              alt="scissors" 
              id="scissors" 
              className={imageClass('scissors')}
              onClick={() => game("scissors")}
            />
          </button>
        </div>
    );
};

export default Buttons;
