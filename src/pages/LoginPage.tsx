import { useForm } from "@src/hooks";
import { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

interface Props {}

interface LoginFormState {
  email: string;
  password: string;
}

const LoginPage: FC<Props> = () => {
  const {
    state: { email, password },
    setState: setLoginFormState,
    onChangeHandler,
  } = useForm<LoginFormState>({
    email: "",
    password: "",
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <GlobalStyle />
      <LoginModla>
        <Label>
          <InputDesc>Email Address</InputDesc>
          <LoginInput
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          <InputDesc>Password</InputDesc>
          <LoginInput
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </Label>
        <LoginButton type="submit">Log In</LoginButton>
      </LoginModla>
      <HelpTextWrap>
        <HelpText to="/password">Lost your password?</HelpText>
      </HelpTextWrap>
    </Container>
  );
};

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f0f0f1;
    }
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  margin-top: 150px;
`;
const InputDesc = styled.span`
  color: #3c434a;
  font-size: 13px;
`;
const LoginInput = styled.input`
  border: 1px solid #8c8f94;
  border-radius: 4px;
  color: #3c434a;
  font-size: 17px;
  padding: 7px;
  transition: 0.3s border;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;
const LoginModla = styled.form`
  width: 100%;
  border: 1px solid #c3c4c7;
  box-shadow: 0 1px 3px rgb(0 0 0 / 4%);
  border-radius: 2px;
  background-color: white;
  padding: 25px 20px;
  box-sizing: border-box;
`;
const LoginButton = styled.button`
  background-color: #2271b1;
  margin-top: 20px;
  width: 100%;
  color: white;
  font-size: 17px;
  border-radius: 4px;
  padding: 13px 0;
`;
const HelpTextWrap = styled.div`
  margin-top: 10px;
  padding: 0 20px;
`;
const HelpText = styled(Link)`
  color: #50575e;
  font-size: 15px;
  transition: 0.3s color;

  &:hover {
    color: #135e96;
  }
`;

export default LoginPage;
