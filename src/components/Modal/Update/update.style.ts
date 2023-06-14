import styled from "styled-components";

export const Update = styled.div`
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

  height: 30%;
  width: 96%;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 6vw;
  height: 4vh;
`;

export const Cencle = styled.img`
  width: 3vw;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-left: 25px;
  font-size: 1.5vw;
  font-weight: 600;
`;

export const UpdateTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 35%;
  width: 15vw;
`;

export const Input = styled.input`
  width: 2vw;
  height: 5vh;
  font-size: 28px;

  text-align: center;

  border: none;
  border-bottom: 2px solid black;
  outline: none;
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
