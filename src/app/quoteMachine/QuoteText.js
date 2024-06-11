import React from "react";
import { QuoteLeft } from "@/icons/icons";

const Quote = ({ fade, textColor, author, quote }) => {
  return (
    <div className={`flex flex-col gap-3 transition-opacity ${fade}`}>
      <div className={`text-2xl`}>
        <span>{quote}</span>
        {/* <FontAwesomeIcon 
            icon={solid("quote-right")}
            className="quotes delay"
            color={color}/> */}
      </div>

      <div>
        <span>
          - {author}
        </span>
      </div>
    </div>
  );
};

export default Quote;
