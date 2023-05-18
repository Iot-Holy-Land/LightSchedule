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
