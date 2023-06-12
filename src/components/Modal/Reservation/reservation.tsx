import * as S from "./reservation.style";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Status } from "../../../recoil/Modal";
import { currentDate, inputAmPm } from "../../../recoil/Time";
import { useInsert } from "../../../utils";

export const Reservation = () => {
  const [status, setStatus] = useRecoilState(Status);
  const date = useRecoilValue(currentDate);

  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [inputToDB, setInputToDB] = useState("");
  const [copytime, setCopytime] = useState("");
  const [amPm, setAmPm] = useRecoilState(inputAmPm);

  const { useInsertData } = useInsert();

  const Plus = () => {
    if (hour.length === 0 || min.length === 0) {
      alert("예약 시간을 입력해주세요");
    } else if (amPm.length === 0) {
      alert("오전과 오후를 선택해주세요");
    } else {
      alert("추가되었습니다.");
    }
    if (amPm === "오전") {
      setCopytime(`${hour}시${min}분`);
      setInputToDB(`${hour}시${min}분0초`);
    } else {
      setCopytime(`${hour}시${min}분`);
      setInputToDB(`${hour}시${min}분0초`);
    }
  };
  const data = useInsertData(copytime, inputToDB, date, amPm);

  const Error = data.data;

  if (Error === 1) {
    // alert("중복되는 예약이 있습니다");
  }

  return (
    <>
      <S.Reservation>
        <S.Top>
          <S.Title>원하시는 시간을 적어주세요.</S.Title>
          <S.Cencle src="./img/Cencle.png" onClick={() => setStatus(false)} />
        </S.Top>

        <S.Select onChange={e => setAmPm(e.target.value)}>
          <option value="">선택</option>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
        </S.Select>

        <S.ResTime>
          <div>
            <S.Input onChange={(e: any) => setHour(e.target.value)} />
            <S.Text>시</S.Text>
          </div>
          <div>
            <S.Input onChange={(e: any) => setMin(e.target.value)} />
            <S.Text>분</S.Text>
          </div>
        </S.ResTime>
        <S.Plus>
          <S.Btn onClick={Plus}>추가</S.Btn>
        </S.Plus>
      </S.Reservation>
    </>
  );
};
