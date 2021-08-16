import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  category: string;
  writeData: string;
  href: string;
}

const PostInfo: FC<Props> = ({
  title,
  href,
  subTitle,
  category,
  writeData,
}) => {
  return (
    <Container>
      <PostCategory>{category}</PostCategory>
      <PostTitle to={href}>{title}</PostTitle>
      <PostSubTitle>{subTitle}</PostSubTitle>
      <PostWriteDate>{writeData}</PostWriteDate>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const PostCategory = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
`;
const PostTitle = styled(Link)`
  font-size: 35px;
  font-weight: 700;
`;
const PostSubTitle = styled.span`
  font-weight: 100;
  font-size: 20px;
  margin-bottom: 8px;
`;
const PostWriteDate = styled.span`
  font-size: 15px;
  font-weight: 100;
`;

export default PostInfo;
