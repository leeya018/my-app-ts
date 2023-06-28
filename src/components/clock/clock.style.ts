import styled from "styled-components";

export const ClockContainer = styled.div`
  /* Add your styles here */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-size: 2em;
  color: #333;
`;

export const Timer = styled.div`
  background-color: blue;
  border: 1px solid black;
`;
export const Seconds = styled.div`
  background-color: yellow;
`;
export const Minuts = styled.div`
  background-color: green;
`;
export const TimerContainer = styled.div`
  display: flex;
`;
