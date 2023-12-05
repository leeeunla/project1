import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BoardContext } from "./Board";
import { login } from "./api";

const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;

const defaultLogin = {
  loginId: "defaultLoginId",
  password: "defaultPassword",
};

export function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(defaultLogin);
  const [loggingIn, setLoggingIn] = useState(false);

  const { loginState, setLoginState } = useContext(BoardContext);

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery("login", () => {
    if (
      userLogin.password !== null &&
      userLogin.password !== "defaultPassword"
    ) {
      // 여기에서 실제 로그인 API를 호출하고 결과를 반환해야 합니다.
      // 현재는 임시로 더미 데이터를 반환하도록 구현되어 있습니다.
      return login(userLogin);
    }
  });

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && userLogin) {
      console.log("login", data);
      localStorage.setItem(
        "loginState",
        JSON.stringify({ id: userLogin.loginId })
      );
      setLoginState({ id: userLogin.loginId });
      setLoggingIn();
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/loginid");
    }
  }, [data]);

  function onSubmit(e) {
    e.preventDefault();
    if (loginId === "" || password === "") {
      alert("입력해주세요");
      return;
    }
    const user = {
      loginId: loginId,
      password: password,
    };
    setUserLogin(user);
    setLoggingIn(true);
  }

  useEffect(() => {
    refetch();
  }, [userLogin]);

  return (
    <>
      {loggingIn ? (
        <h1 style={{ color: "white" }}>로그인 중입니다...</h1>
      ) : loginState?.id ? (
        <h1>로그인 확인되었습니다. </h1>
      ) : (
        <Container>
          <form onSubmit={onSubmit}>
            <Header>Login</Header>
            <div>
              <label>아이디</label>
              <br />
              <input
                id="loginId"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
              />
            </div>
            <div>
              <label>비밀번호</label>
              <br />
              <input
                id="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">로그인</Button>
          </form>
        </Container>
      )}
    </>
  );
}
