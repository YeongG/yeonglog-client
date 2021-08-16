import { FC, useCallback, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { useInput } from "@src/hooks";
import Prism from "prismjs";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import SelectBox from "@components/SelectBox";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/components/prism-typescript";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import styled from "styled-components";
import { Media1000Div } from "@src/GlobalStyles";

const staticOptions = [
  {
    name: "회고",
    value: "회고",
  },
  {
    name: "개발",
    value: "개발",
  },
  {
    name: "기술팁",
    value: "기술팁",
  },
];

const WritePage: FC = () => {
  const [title, setTitle, changeHandler] = useInput("");
  const [category, setCategory] = useState("");

  const categoryHandler = useCallback(
    (item: { name: string; value: string }) => {
      setCategory(item.value);
    },
    []
  );
  return (
    <Container>
      <MarginWrapper>
        <TitleWrpaper>
          <TitleInput
            value={title}
            onChange={changeHandler}
            placeholder="제목을 입력하세요..."
          />
          <SelectBox
            onChange={categoryHandler}
            options={staticOptions}
            placeholder="카테고리"
            value={category}
          />
        </TitleWrpaper>
        <Editor
          height="auto"
          minHeight="300px"
          hideModeSwitch
          plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        <div className="footer-wrap">
          <button className="thum">썸네일</button>
          <button className="submit">작성</button>
        </div>
      </MarginWrapper>
    </Container>
  );
};

const Container = styled.div``;
const MarginWrapper = styled(Media1000Div)`
  margin-top: 100px;
  .toastui-editor-md-container {
    z-index: 3;
  }
  .footer-wrap {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    button {
      padding: 15px 0;
      color: white;
      border-radius: 4px;
      width: calc(50% - 10px);
      background: #2271b1;
      transition: 0.3s all;
      font-size: 16px;

      &:hover {
        background: #185281;
      }
    }
  }
`;
const TitleWrpaper = styled.div`
  display: flex;

  > div {
    width: 100px;
  }
`;
const TitleInput = styled.input`
  flex: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  font-weight: 700;
  font-size: 25px;
`;

const CategoryWrap = styled.div``;

export default WritePage;
