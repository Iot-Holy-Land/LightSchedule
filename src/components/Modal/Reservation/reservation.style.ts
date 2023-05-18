import styled from "styled-components";

export const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40vw;
  height: 50vh;

  box-shadow: 5px 5px 20px gray;
  border-radius: 20px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20%;
  width: 96%;
`;

export const Cencle = styled.img`
  width: 3vw;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-left: 25px;
  font-size: 24px;
  font-weight: 600;
`;

export const ResTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 50%;
  width: 30%;
`;

export const Input = styled.input`
  width: 2vw;
  height: 8vh;
  font-size: 24px;
`;

export const Text = styled.a`
  font-size: 30px;
  font-weight: 600;
`;

export const Plus = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  width: 85%;
  height: 20%;
`;

export const Btn = styled.button`
  width: 10vw;
  height: 6vh;

  border-radius: 10px;
  border: none;

  box-shadow: 3px 3px 10px gray;

  cursor: pointer;

  transition: all 0.1s;
  :active {
    transform: scale(0.95);
  }
`;
