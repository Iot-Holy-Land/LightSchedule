import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 65vh;
`;

export const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25vw;
  height: 68vh;
  border-radius: 10px;
  box-shadow: 5px 5px 20px gray;
`;

export const PushContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17vw;
  height: 53vh;
  border-radius: 10px;
  border: 2px solid black;
`;

export const Push = styled.div<{ status: string }>`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  width: 14vw;
  height: 49vh;
  border-radius: 10px;
  cursor: pointer;
  ${({ status }) =>
    status === "켜짐"
      ? css`
          box-shadow: 20px 2px 10px -2px black;
        `
      : css`
          box-shadow: -20px 2px 10px -2px black;
        `}
`;

export const On = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  font-size: 18px;
  font-weight: 600;

  width: 50%;
  height: 100%;
`;

export const Off = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  font-size: 18px;
  font-weight: 600;

  width: 50%;
  height: 100%;
`;
