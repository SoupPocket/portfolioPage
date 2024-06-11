"use client";
import { useState } from "react";
import { randomObjectColor, randomQuote } from "./utils/utils";
import { quoteList } from "./data/quoteList";
import { colorBank } from "./data/colors";
import Quote from "./QuoteText";

const QuoteMachine = () => {
  const [clicked, setClicked] = useState();
  const [color, setColor] = useState();
  const [fade, setFade] = useState();
  const [author, setAuthor] = useState();
  const [quote, setQuote] = useState();
  let count = 0;
  const handleQuoteClick = () => {
    count++;
    randomObjectColor(colorBank);
    const randomColor = randomObjectColor(colorBank);
    setColor(randomColor);
    const { quote, author } = randomQuote(quoteList);
    setClicked(count);
    setFade("opacity-0");

    setTimeout(() => {
      setFade("opacity-100");
      setQuote(quote);
      setAuthor(author);
    }, 700);
  };

  return (
    <div
      className={`w-full flex h-full justify-center items-center`}
      style={{ backgroundColor: color, color: color, transition: "background-color 2s ease, color 2s ease" }}
    >
      <div className={`bg-gray-100 w-1/2 rounded-xl p-8 shadow-xl`}>
        <Quote
          clicked={clicked}
          fade={fade}
          quote={quote}
          author={author}
        />
        <button
          className={`btn mt-4 text-gray-100 `}
          style={{ backgroundColor: color, borderColor: color, transition: "background-color 1s ease" }}
          onClick={() => handleQuoteClick()}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteMachine;
