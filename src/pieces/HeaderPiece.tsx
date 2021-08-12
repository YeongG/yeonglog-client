import { FC } from "react";
import * as S from "./styles";

interface Props {}

const HeaderPiece: FC<Props> = () => {
  return (
    <S.Container>
      <S.Logo>YeongLog</S.Logo>
      <div>Menu</div>
    </S.Container>
  );
};

export default HeaderPiece;
