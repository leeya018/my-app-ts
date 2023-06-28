import React, { useEffect, useState } from "react";
import { UseClockProps } from "./interfaces";

export default function useClock(props: UseClockProps) {
  const [timer, setTimer] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimer(props.timer);
    setMinuts(props.timer);
    setSeconds(props.timer);
  }, []);

  const calculateCurrTime = () => {
    return timer + ":" + minuts + ":" + seconds + ":";
  };
  const showTimer = () => {
    return timer + ":" + minuts + ":" + seconds + ":";
  };
  const increaseTimer = () => {
    setMinuts((prev) => prev + 10);
  };
  const resetSeconds = () => {
    setSeconds(0);
  };
  return {
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
  };
}
