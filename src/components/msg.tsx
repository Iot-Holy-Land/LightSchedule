import styled from "styled-components";

export const Msg = () => {
  return <Text>예약내용이 없습니다.</Text>;
};

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 600;
  color: lightgray;
  width: 40vw;
`;
