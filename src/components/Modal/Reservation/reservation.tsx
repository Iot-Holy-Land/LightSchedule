import * as S from "./reservation.style";
import { useState, useSyncExternalStore } from "react";
import { useRecoilState } from "recoil";
import { Status } from "../../../recoil/Modal";

export const Reservation = () => {
  const [status, setStatus] = useRecoilState(Status);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [timer, setTimer] = useState("00시00분");

  const Cencle = () => {
    setStatus(false);
    console.log(timer);
  };

  const Plus = () => {
    setTimer(`${hour}시${min}분`);
  };
  return (
    <S.Reservation>
      <S.Top>
        <S.Title>원하시는 시간을 적어주세요.</S.Title>
        <S.Cencle src="./img/Cencle.png" onClick={Cencle} />
      </S.Top>
      <S.ResTime>
        <div>
          <S.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHour(e.target.value)
            }
          />
          <S.Text>시</S.Text>
        </div>
        <div>
          <S.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMin(e.target.value)
            }
          />
          <S.Text>분</S.Text>
        </div>
      </S.ResTime>
      <S.Plus>
        <S.Btn onClick={Plus}>추가</S.Btn>
      </S.Plus>
    </S.Reservation>
  );
};
