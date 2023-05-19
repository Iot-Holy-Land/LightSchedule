import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;
`;
export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  font-size: 50px;
  font-weight: 600;
  height: 30vh;
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 1s linear infinite;
`;
