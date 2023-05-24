import { useQuery } from "@tanstack/react-query";
import { View, deleteType } from "../../utils/auth";
import * as S from "./Data.style";
import { Clock } from "../Clock/Clock";
import { Loading } from "../Loading/loading";
import { useDelete } from "../../utils";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Check } from "../../recoil/Modal";
import { Msg } from "../msg";
import { currentDate, inputAmPm } from "../../recoil/Time";

export const Data = () => {
  const { data, isLoading } = useQuery(["View"], View);
  const [time, setTime] = useState("");
  const [date, setDate] = useRecoilState(currentDate);
  const [id, setId] = useState<any>(0);
  const { useDeleteData } = useDelete();
  const [check, setCheck] = useRecoilState(Check);
  const amPm = useRecoilValue(inputAmPm);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      setDate(`${time.getMonth() + 1}월${time.getDate()}일`);
      setTime(
        `${time.getHours()}시${time.getMinutes()}분${time.getSeconds()}초`
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      window.location.replace("http://localhost/BE/send.php");
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
              <div>
                <div>예약시간: {e.time}</div>
              </div>
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
