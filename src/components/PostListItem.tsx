import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PostInfo from "@components/PostInfo";

interface Props {
  attachment?: boolean;
  isTop?: boolean;
  backgroundImgSrc: string;
  title: string;
  subTitle: string;
  category: string;
  writeData: string;
  id: number;
}

const PostListItem: FC<Props> = ({
  id,
  isTop,
  backgroundImgSrc,
  category,
  title,
  subTitle,
  writeData,
  attachment,
}) => {
  return (
    <Container attachment={attachment} isTop={isTop}>
      <BackgroundHoverImage imgSrc={backgroundImgSrc} />
      <PostWrap>
        <PostInfo
          title={title}
          subTitle={subTitle}
          category={category}
          writeData={writeData}
          href={`/post/${id}`}
        />
      </PostWrap>
    </Container>
  );
};

export const PostWrap = styled.div`
  padding: 8em 0;
`;
export const PostCategory = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
`;
export const PostTitle = styled(Link)`
  font-size: 35px;
  font-weight: 700;
`;
export const PostSubTitle = styled.span`
  font-weight: 100;
  font-size: 20px;
  margin-bottom: 8px;
`;
export const PostWriteDate = styled.span`
  font-size: 15px;
  font-weight: 100;
`;
export const BackgroundHoverImage = styled.div<{ imgSrc: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;

  background: url(${(props) => props.imgSrc}) no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const Container = styled.div<{
  isTop?: boolean;
  attachment?: boolean;
}>`
  position: relative;
  transition: 1s background ease-in;
  ${PostWrap} > * {
    transition: 0.7s color ease-in;
  }
  ${BackgroundHoverImage} {
    transition: opacity 1s ease-in;
    background-attachment: ${(props) =>
      props.attachment ? "fixed" : "normal"};
  }

  ${(props) =>
    props.isTop &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      padding-top: 8em;
      ${PostWrap} > * {
        color: #fff;
      }
      ${BackgroundHoverImage} {
        opacity: 1;
      }
    `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: transparent;
    ${PostWrap} > * {
      color: #fff;
    }
    ${BackgroundHoverImage} {
      opacity: 1;
    }
  }

  & + & {
    border-top: 1px solid #ddd;
  }
`;

export default PostListItem;
