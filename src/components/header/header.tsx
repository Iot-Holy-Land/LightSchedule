import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.Logo src="./img/Logo.png" />
      <S.Menu to="/">Home</S.Menu>
      <S.Menu to="/">Chart</S.Menu>
    </S.Header>
  );
};
