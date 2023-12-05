import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Board } from "./Board";

const SideTest = styled.div`
  height: auto;
  width: 140px;
  cursor: pointer;
  margin: 10px;
  text-align: center;
  font-size: 15px;
  font-family: EASTARJET-Medium;
  color: white;
  @font-face {
    font-family: "EASTARJET-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2")
      format("woff2");
    font-weight: 500;
    font-style: normal;
  }
`;
const MainTest = styled.div`
  border: 1px solid gray;
  height: auto;
  width: 130px;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  text-align: center;
  font-size: 18px;
  font-family: "JalnanGothic";
  color: white;
  @font-face {
    font-family: "JalnanGothic";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const ImageContainer = styled.div``;

export function MainT() {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [author, setauthor] = useState("");
  const navigate = useNavigate("/");

  const { data, isLoading } = useQuery("", () => {
    if (id) {
      setID(title);
      return Board();
    }
  });
  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && id) {
      console.log(data);
      localStorage.setItem(JSON.stringify({}));
      setText({});
      setTimeout(() => {
        navigate("/board");
        setDate(false);
      }, 1000);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("");
    }
  }, [data]);

  useEffect(() => {}, {});
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Container>
        <div>
          <MainTest>공지사항</MainTest>
          {/* 제목 */}
          <Link to="mainu/0" style={{ textDecoration: "none" }}>
            <SideTest>게임관련</SideTest>
          </Link>
          <Link to="mainu/1" style={{ textDecoration: "none" }}>
            <SideTest>커뮤니티 이벤트</SideTest>
          </Link>
          <Link to="mainu/2" style={{ textDecoration: "none" }}>
            <SideTest>버그/수정</SideTest>
          </Link>
        </div>

        <div>
          <MainTest>커뮤니티</MainTest>
          {/* 제목 */}
          <Link to="mainu/3" style={{ textDecoration: "none" }}>
            <SideTest>자유게시판</SideTest>
          </Link>
          <Link to="mainu/4" style={{ textDecoration: "none" }}>
            <SideTest>질문과답변</SideTest>
          </Link>
          <Link to="mainu/5" style={{ textDecoration: "none" }}>
            <SideTest>가입인사</SideTest>
          </Link>
        </div>

        <div>
          <MainTest>그림게시판</MainTest>
          {/* 제목 */}
          <Link to="mainu/6" style={{ textDecoration: "none" }}>
            <SideTest>팬아트</SideTest>
          </Link>
          <Link to="mainu/7" style={{ textDecoration: "none" }}>
            <SideTest>손그림</SideTest>
          </Link>
          <Link to="mainu/8" style={{ textDecoration: "none" }}>
            <SideTest>커미션</SideTest>
          </Link>
        </div>
      </Container>
    </>
  );
}
