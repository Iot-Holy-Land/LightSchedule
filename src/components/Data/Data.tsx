import { useQuery } from "@tanstack/react-query";
import { View, deleteUpdateType } from "../../utils/auth";
import * as S from "./Data.style";
import { Clock } from "../Clock/Clock";
import { Loading } from "../Loading/loading";
import { useDelete, useUpdate } from "../../utils";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Check, Id, Status } from "../../recoil/Modal";
import { Msg } from "../msg";
import { currentDate } from "../../recoil/Time";
import { UpdateModal } from "../Modal/Update/update";

export const Data = () => {
  const { data, isLoading } = useQuery(["View"], View);
  const [time, setTime] = useState("");
  const [date, setDate] = useRecoilState(currentDate);
  const [status, setStatus] = useRecoilState(Status);
  const [recive, setRecive] = useRecoilState(Id);
  const [id, setId] = useState<any>(0);
  const { useDeleteData } = useDelete();
  const [check, setCheck] = useRecoilState(Check);

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

  const Update = (clickId: number) => {
    setStatus("updateModal");
    setRecive(clickId);
  };

  // let result = time.slice(0, time.indexOf("분") + 1);
  // console.log(result);

  data?.map((e: any) => {
    if (time === e.time) {
      window.location.replace("http://localhost/BE/send.php");
      console.log("알람온다");
    }
  });

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
    <>
      {status === "updateModal" ? (
        <S.Modal>
          <UpdateModal />
        </S.Modal>
      ) : (
        <S.Container>
          <S.Arrow src="./img/leftArrow.png" />
          <S.Data>
            {data?.map((e: deleteUpdateType) => (
              <S.Card>
                <S.Time>
                  <div>
                    <div>예약시간 : {e.copytime}</div>
                  </div>
                  <S.Update
                    src="./img/update.png"
                    onClick={() => Update(e.id)}
                  />
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
      )}
    </>
  );
};
