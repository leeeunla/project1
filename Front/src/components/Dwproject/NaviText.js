import styled from "styled-components";
import { Board } from "./Board";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import MySwiper from "./MySwiper";
import { Footer } from "./Footer";
import { MainT } from "./MainT";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { BoardContext } from "./Board";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  position: relative;
`;
const Div = styled.div`
  padding: 3px;
  border: 1px solid black;
`;
const P = styled.div`
  border: 1px solid black;
  height: 40px;
  width: 90px;
  text-align: center;
  color: black;
  background-color: white;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  cursor: pointer;
  padding: 10px;
`;
const Box1 = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 150px;
  color: black;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px;
`;

const Box2 = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 71px;
  color: black;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px;
`;
const Box3 = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  color: black;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
`;
const Input = styled.div`
  position: absolute;
  top: 0;
  right: 225px;
  display: flex;
  border: 1px solid black;
  cursor: pointer;
`;
const Button = styled.div`
  background-color: white;
  padding: 2.5px;
`;

const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  background-image: url("/img/moon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
`;

export function NaviText() {
  const { loginState, setLoginState } = useContext(BoardContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loginState", JSON.stringify({ id: null }));
    setLoginState({ id: null });
    navigate("/");
  };
  return (
    <>
      <Container>
        <BG />
        <Div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <P>Home</P>
          </Link>
          {loginState.id ? (
            <Link to="logout" style={{ textDecoration: "none" }}>
              <Box1>로그아웃</Box1>
            </Link>
          ) : (
            <Link to="login" style={{ textDecoration: "none" }}>
              <Box1>로그인</Box1>
            </Link>
          )}
          <Link to="singup" style={{ textDecoration: "none" }}>
            <Box2>회원가입</Box2>
          </Link>
          <button onClick={handleLogout}>로그아웃</button>
          <Link to="writing" style={{ textDecoration: "none" }}>
            <Box3>글쓰기</Box3>
          </Link>

          <Input>
            <input type="text" name="q" placeholder="검색어를 작성하세요" />
            <Button type="submit">검색</Button>
          </Input>
        </Div>
        <Header />
        <MainT />
        <Outlet />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MySwiper />
        <Footer />
      </Container>
    </>
  );
}
