import { Data } from "../../components/Data/Data";
import { Footer } from "../../components/footer/footer";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { Status } from "../../recoil/Modal";
import { useEffect } from "react";
import { currentTime, currentDate, inputAmPm } from "../../recoil/Time";

import { Reservation } from "../../components/Modal/Reservation/reservation";

export const Main = () => {
  const [status, setStatus] = useRecoilState(Status);
  const Insert = () => {
    setStatus(true);
  };

  const [timer, setTimer] = useRecoilState(currentTime);
  const [date, setDate] = useRecoilState(currentDate);
  const amPm = useRecoilValue(inputAmPm);

  console.log("넘어온 데이터 : ", amPm);
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      setDate(`${time.getMonth() + 1}월${time.getDate()}일`);

      setTimer(
        `${time.getHours()}시${time.getMinutes()}분${time.getSeconds()}초`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {status ? (
        <Modal>
          <Reservation />
        </Modal>
      ) : (
        <>
          <Container>
            <PlusLine>
              <Select>
                <option value="am">오전</option>
                <option value="pm">오후</option>
              </Select>
              <Plus src="./img/Plus.png" onClick={Insert} />
            </PlusLine>
          </Container>
          <Data />
        </>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 60vh;
`;

const Select = styled.select`
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
  outline: none;
  width: 8vw;
  height: 5vh;

  border: none;
  border-bottom: 2px solid black;
`;
const PlusLine = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 63vw;
  height: 8vh;
`;

const Plus = styled.img`
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;
