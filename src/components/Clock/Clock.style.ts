import styled from "styled-components";

export const Clock = styled.div`
  position: absolute;
  width: 10vw;
  height: 10vw;
`;

export const Circle1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50%;
`;

export const Number = styled.img`
  width: 9vw;
`;

export const Dot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;

export const Test = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Test2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HourLine = styled.div`
  width: 2.5vw;
  height: 0.8vh;

  border-radius: 20px;
  background-color: black;
`;

export const MinLine = styled.div`
  position: fixed;
  width: 0.4vh;
  height: 3vw;

  border-radius: 20px;
  background-color: black;
`;
