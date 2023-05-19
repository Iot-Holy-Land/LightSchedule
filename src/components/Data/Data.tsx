import * as S from "./Data.style";
import { Clock } from "../Clock/Clock";

export const Data = () => {
  return (
    <>
      {/* <S.Container>
        <S.Arrow src="./img/leftArrow.png" />
        <S.Data>
          {data?.map((e: any) => (
            <S.Card>
              <S.Time>
                <div>예약시간 : {e.time}</div>
              </S.Time>
              <S.Picture>
                <Clock />
              </S.Picture>
              <S.Date>
                <div>예약 날짜 : {e.date}</div>
              </S.Date>
            </S.Card>
          ))}
        </S.Data>
        <S.Arrow src="./img/rightArrow.png" />
      </S.Container> */}
    </>
  );
};
