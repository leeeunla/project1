import React, { useContext, useEffect, useState } from "react";
import { BoardContext } from "./Board";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { singup } from "./api";

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

const defaultSignUp = {
  loginId: "defaultLoginId",
  name: "Name",
  password: "Password",
  birthdate: "BirthDate",
  gender: "Gender",
  email: "Email",
};

export function SingUp() {
  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [completionMessage, setCompletionMessage] = useState("");
  const { loginState, setLoginState } = useContext(BoardContext);

  const [signUp, setSignUp] = useState(defaultSignUp);
  const navigate = useNavigate();

  const { data, refetch } = useQuery("singup", () => {
    console.log("api call", signUp);
    if (signUp.loginId !== null && signUp.loginId !== "defaultLoginId") {
      return singup(signUp);
    }
  });

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && loginId) {
      console.log(data);
      setSignUp(defaultSignUp);
      setCompletionMessage("가입이 완료되었습니다. 환영합니다.");

      localStorage.setItem("loginState", JSON.stringify({ id: loginId }));
      setLoginState({ id: loginId });
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("singUp");
    }
  }, [data]);

  function singupRequest(e) {
    e.preventDefault();
    if (!name || !password) {
      alert("입력해주세요");
      return;
    }
    const newSingUp = {
      loginId: loginId,
      password: password,
      name: name,
      birthDate: birthdate,
      gender: gender,
      email: email,
    };
    setSignUp(newSingUp);
  }

  useEffect(() => {
    refetch();
  }, [signUp]);

  function getSelect(e) {
    console.log(e.target.value);
    setGender(e.target.value);
  }

  return (
    <>
      {completionMessage ? (
        <h1>{completionMessage}</h1>
      ) : loginState?.id ? (
        <>
          <h1>이미 로그인 되었습니다.</h1>
          <h1>로그아웃한 후에 가입해 주세요</h1>
        </>
      ) : (
        <Container>
          <form onSubmit={singupRequest}>
            <Header>회원가입</Header>
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
              <label>성함</label>
              <br />
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <div>
              <label>생년월일 8자리</label>
              <br />
              <input
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div>
              <label>성별</label>
              <br />
              <select value={gender} onChange={getSelect}>
                <option value="선택">선택</option>
                <option value="MAN" selected>
                  남성
                </option>
                <option value="WOMAN">여성</option>
              </select>
            </div>
            <div>
              <label>Email</label>
              <br />
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit">회원가입</Button>
          </form>
        </Container>
      )}
    </>
  );
}
