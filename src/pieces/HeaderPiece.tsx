import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {}

const HeaderPiece: FC<Props> = () => {
  return (
    <Container>
      <Logo to="/">YeongLog</Logo>
      <LogIn to="/login">Login</LogIn>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  cursor: pointer;
  top: 0px;
  z-index: 1;
`;

export const Logo = styled(Link)`
  font-family: Do Hyeon;
  font-size: 30px;
  cursor: pointer;
  color: #c1bebe;
`;

export const LogIn = styled(Link)`
  font-family: Do Hyeon;
  font-size: 20px;
  color: #c1bebe;
`;

export default HeaderPiece;
