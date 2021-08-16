import { FC, useRef, useEffect } from "react";
import Prism from "prismjs";
import { Editor, Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import PostInfo from "@components/PostInfo";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import styled from "styled-components";
import { Media1000Div } from "@src/GlobalStyles";

interface Props {}

const PostDetailPage: FC<Props> = () => {
  const toastRef = useRef<Editor>(null);

  useEffect(() => {
    setInterval(() => {
      // console.log(toastRef.current?.getInstance().getMarkdown());
    }, 2000);

    // toastRef.current?.getInstance().setMarkdown(contents);
  }, []);

  return (
    <Container>
      <HeaderTop>
        <Background />
        <FixedWrapper>
          <HeaderWrap>
            <PostInfo
              category="기술팁"
              subTitle="촉촉하게 상태 공급 해주는 방법"
              title="Recoil 레시피: 서버 사이드 렌더링"
              writeData="Febuary 2, 2021"
              href="/"
            />
          </HeaderWrap>
        </FixedWrapper>
      </HeaderTop>
      <Content>
        <Viewer
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          ref={toastRef}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div``;
const HeaderTop = styled.div`
  height: 100vh;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
`;
const Background = styled.div`
  position: absolute;
  background: url("https://taegon.kim/wp-content/uploads/2020/07/recoil-recipes-2.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
const Content = styled(Media1000Div)``;
const HeaderWrap = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  position: fixed;
  display: flex;
  flex-direction: column;
`;
const PostTitle = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
const PostSubTitle = styled.span`
  font-weight: 100;
  font-size: 20px;
  margin-bottom: 8px;
`;
const PostCategory = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 100;
`;
const PostWriteDate = styled.span`
  font-size: 15px;
  font-weight: 100;
`;
const FixedWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 200px;
`;

export default PostDetailPage;
