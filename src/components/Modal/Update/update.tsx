import * as S from "./update.style";
import { Id, Status } from "../../../recoil/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { useUpdate } from "../../../utils";
import { currentDate, inputAmPm } from "../../../recoil/Time";
import { useState, useEffect } from "react";

export const UpdateModal = () => {
  const [status, setStatus] = useRecoilState(Status);

  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [inputToDB, setInputToDB] = useState("");
  const [copytime, setCopytime] = useState("");
  const [amPm, setAmPm] = useRecoilState(inputAmPm);
  const { useUpdateData } = useUpdate();
  const id = useRecoilValue(Id);

  const Plus = () => {
    if (hour.length === 0 || min.length === 0) {
      alert("변경할 시간을 입력해주세요");
    } else {
      alert("변경되었습니다.");
    }
    if (amPm === "오전") {
      setCopytime(`${hour}시${min}분`);
      setInputToDB(`${hour}시${min}분0초`);
    } else {
      setCopytime(`${hour}시${min}분`);
      setInputToDB(`${hour}시${min}분0초`);
    }
    window.location.replace("/");
  };

  useUpdateData(id, copytime, inputToDB, amPm);

  return (
    <>
      <S.Update>
        <S.Top>
          <S.Title>수정하고싶은 시간을 적어주세요.</S.Title>
          <S.Cencle src="./img/Cencle.png" onClick={() => setStatus("")} />
        </S.Top>

        <S.Select onChange={e => setAmPm(e.target.value)}>
          <option value="">선택</option>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
        </S.Select>

        <S.UpdateTime>
          <div>
            <S.Input onChange={(e: any) => setHour(e.target.value)} />
            <S.Text>시</S.Text>
          </div>
          <div>
            <S.Input onChange={(e: any) => setMin(e.target.value)} />
            <S.Text>분</S.Text>
          </div>
        </S.UpdateTime>
        <S.Plus>
          <S.Btn onClick={Plus}>수정하기</S.Btn>
        </S.Plus>
      </S.Update>
    </>
  );
};
