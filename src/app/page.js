"use client";
import { useState } from "react";
import { appList } from "./appData";
import { ArrowLeft, ArrowRight } from "@/icons/icons";
export default function Home() {
  const [currentApp, setCurrentApp] = useState(0);
  const handleNext = () => {
    setCurrentApp((prevState) => {
      if (prevState < appList.length -1) {
        return prevState + 1;
      } else {
        return 0;
      }
    })
  }
  const handlePrev = () => {
    console.log("asdfasdf")
    setCurrentApp((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return appList.length -1;
      }
    })
  }
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="absolute left-2 w-20 h-full flex items-center">
        <button className="w-full" onClick={() => handlePrev()}>
          <ArrowLeft></ArrowLeft>
        </button>
      </div>
      {appList[currentApp].component}
      <div className="absolute right-2 w-20 h-full flex items-center">
        <button className="w-full" onClick={() => handleNext()}>
          <ArrowRight></ArrowRight>
        </button>
      </div>
    </div>
  )
}