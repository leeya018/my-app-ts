// rnce
//clock-timer
import React, { useEffect, useState } from "react";
import useClock from "./hooks/useClock";
import {
  ClockContainer,
  Minuts,
  Seconds,
  TimerContainer,
  Timer,
} from "./clock.style";

const data = {
  timer: 1,
  minutes: 1,
  seconds: 1,
};
export default function Clock() {
  const {
    timer,
    setTimer,
    minuts,
    setMinuts,
    seconds,
    setSeconds,
    calculateCurrTime,
    increaseTimer,
    showTimer,
    resetSeconds,
  } = useClock(data);
  return (
    <ClockContainer>
      <div>this is a clock </div>
      <div>
        {" "}
        <button onClick={increaseTimer}>click me </button>
        <button onClick={resetSeconds}>reset seconds </button>
      </div>
      <div>{showTimer()}</div>
      <TimerContainer>
        <Timer>{timer}</Timer>
        <Minuts>{minuts}</Minuts>
        <Seconds>{seconds}</Seconds>
      </TimerContainer>
    </ClockContainer>
  );
}
