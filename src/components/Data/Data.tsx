import { useQuery } from "@tanstack/react-query";
import { View, deleteType } from "../../utils/auth";
import * as S from "./Data.style";
import { Clock } from "../Clock/Clock";
import { Loading } from "../Loading/loading";
import { useDelete } from "../../utils";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Check } from "../../recoil/Modal";
import { Msg } from "../msg";
import { currentTime } from "../../recoil/Time";

export const Data = () => {
  const { data, isLoading } = useQuery(["View"], View);
  const { useDeleteData } = useDelete();
  const [check, setCheck] = useRecoilState(Check);
  const time = useRecoilValue(currentTime);
  const [alarm, setAlarm] = useState(false);
  const [id, setId] = useState<any>(0);

  const Delete = (clickId: number) => {
    setCheck(true);
    if (!check) {
      setId(clickId);
      window.location.replace("/");
    }
  };
  useDeleteData(id);

  console.log("현재 시간 : ", time);
  data?.map((e: any) => {
    console.log(e.time);
    if (time === e.time) {
      window.location.replace("http://localhost/send.php");
      console.log("알람온다");
    }
  });
  console.log("-----------");

  if (data?.length === 0) {
    return (
      <S.Container>
        <S.Arrow src="./img/leftArrow.png" />
        <Msg />
        <S.Arrow src="./img/rightArrow.png" />
      </S.Container>
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Arrow src="./img/leftArrow.png" />
      <S.Data>
        {data?.map((e: deleteType) => (
          <S.Card>
            <S.Time>
              <div>예약시간 : {e.time}</div>
              <S.Cencle
                src="./img/Wastebasket.png"
                onClick={() => Delete(e.id)}
              />
            </S.Time>
            <S.Picture>
              <Clock />
            </S.Picture>
            <S.Date>
              <div>{e.ampm}</div>
              <div>예약 날짜 : {e.date}</div>
            </S.Date>
          </S.Card>
        ))}
      </S.Data>
      <S.Arrow src="./img/rightArrow.png" />
    </S.Container>
  );
};
