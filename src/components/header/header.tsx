import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.Logo src="./img/Logo.png" />
      <S.Menu to="/">Reservation</S.Menu>
      <S.Menu to="/onOff">On/Off</S.Menu>
      <S.Menu to="/Chart">Chart</S.Menu>
    </S.Header>
  );
};
