import { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "@src/GlobalStyles";
import IndexPage from "@pages/IndexPage";
import HeaderPiece from "@pieces/HeaderPiece";

interface Props {}

const App: FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderPiece />
      <BrowserRouter>
        <Route exact component={IndexPage} />
      </BrowserRouter>
    </>
  );
};

export default App;
