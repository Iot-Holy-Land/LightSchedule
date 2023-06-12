import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;
`;

export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
  margin: 20px;
`;

export const Card = styled.div`
  width: 18vw;
  height: 18vw;

  border-radius: 20px;
  box-shadow: 3px 3px 20px gray;

  cursor: pointer;

  transition: all 0.2s;
  :hover {
    box-shadow: 5px 5px 5px gray;
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;

  margin-left: 1.5vw;

  font-size: 1vw;
  font-weight: 600;

  height: 25%;
`;

export const Update = styled.img`
  width: 2vw;
`;

export const Cencle = styled.img`
  width: 4vw;
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  width: 100%;
  height: 70%;
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;

  width: 18vw;
`;

export const Arrow = styled.img`
  width: 5rem;
  cursor: pointer;
`;
