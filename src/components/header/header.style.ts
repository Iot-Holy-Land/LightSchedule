import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 70vw;
  height: 20vh;
`;

export const Logo = styled.img`
  width: 20vw;
  height: auto;
`;

export const Menu = styled.p`
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

  :hover {
    border-bottom: 3px solid black;
  }
`;
