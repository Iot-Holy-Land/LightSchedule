import * as S from "./loading.style";

export const Loading = () => {
  return (
    <S.Container>
      <S.Loading>
        로딩 중
        <S.Spinner />
      </S.Loading>
    </S.Container>
  );
};
