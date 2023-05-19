import { Data } from "../../components/Data/Data";
import { Footer } from "../../components/footer/footer";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { Status } from "../../recoil/Modal";
import { useEffect } from "react";
import { currentTime } from "../../recoil/Time";

import { Reservation } from "../../components/Modal/Reservation/reservation";

export const Main = () => {
  const [status, setStatus] = useRecoilState(Status);
  const Insert = () => {
    setStatus(true);
  };

  const [timer, setTimer] = useRecoilState(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      setTimer(`${hour}시${min}분`);
      console.log("현재 시간:", `${hour}시${min}분`);
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
          <PlusLine>
            <Plus src="./img/Plus.png" onClick={Insert} />
          </PlusLine>
          <Data />
        </>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 60vh;
`;

const PlusLine = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 82vw;
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
