import { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "@src/GlobalStyles";
import IndexPage from "@pages/IndexPage";
import HeaderPiece from "@pieces/HeaderPiece";
import LoginPage from "@pages/LoginPage";
import WritePage from "@pages/WritePage";
import PostDetailPage from "@pages/PostDetailPage";

interface Props {}

const App: FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderPiece />
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/post/:id" component={PostDetailPage} />
        <Route exact path="/write" component={WritePage} />
        <Route exact path="/login" component={LoginPage} />
      </BrowserRouter>
    </>
  );
};

export default App;
