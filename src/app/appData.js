import QuoteMachine from "./quoteMachine/QuoteMachine";
import ClockApp from "./clock/ClockApp";
import RPSGame from "./rockPaperScissors/components/Main";

export const appList = [
  {
    id:1,
    name: "Clock",
    component: <ClockApp />,
  },

  {
    id: 2,
    name: "Random Quote Machine",
    description: "", 
    component: <QuoteMachine />,
  },

  {
    id: 3,
    name: "Rock Paper Scissors",
    component: <RPSGame />,
  }
]


  /* {
    id: 3,
    name: "",
    description: "", 
    component: 
  }, */