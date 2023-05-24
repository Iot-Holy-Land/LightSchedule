import * as S from "./Clock.style";

export const Clock = () => {
  return (
    <S.Clock>
      <S.Circle1>
        <S.Number src="./img/Clock.png" />
        <S.Dot>
          <S.Test>
            <S.HourLine></S.HourLine>
          </S.Test>
          <S.Test2>
            <S.MinLine></S.MinLine>
          </S.Test2>
        </S.Dot>
      </S.Circle1>
    </S.Clock>
  );
};
