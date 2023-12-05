import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BoardContext } from "./Board";
import { writing } from "./api";

const Container = styled.form``;

const Content = styled.div`
  text-align: center;
  padding-top: 2.5px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
`;

const Contents = styled.div`
  text-align: center;
`;

// 서버의 boardDto와 동일한 객체
const defaultBoard = {
  author: "defaultAuthor",
  title: "defaultTitle",
  text: "defaultText",
  game: "defaultGame",
};

export function Writing() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [board, setBoard] = useState(defaultBoard);
  const [game, setGame] = useState("");

  const { loginState, setLoginState } = useContext(BoardContext);

  const navigate = useNavigate("/board");

  const { data, isLoading, refetch } = useQuery("Writing", () => {
    if (board.author != null && board.author != "defaultAuthor") {
      return writing(board);
    }
  });

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && title) {
      console.log(data);
      setBoard(defaultBoard);
    }
  }, [data]);

  function sendRequest(e) {
    e.preventDefault();
    if (text == null || title == null) {
      alert("입력해주세요");
      return;
    }
    const newBoard = {
      author: loginState.id,
      title: title,
      text: text,
      category: game.option,
    };
    setBoard(newBoard);
  }

  useEffect(() => {
    refetch();
  }, [board]);

  return (
    <>
      <Container onSubmit={sendRequest}>
        <Contents>
          <select
            style={{ padding: "5px", margin: "5px" }}
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
          >
            <option value="선택" selected="selected">
              선택
            </option>
            <option value="games">게임관련</option>
            <option value="community">커뮤니티 이벤트</option>
            <option value="bug">버그/수정</option>
            <option value="freedom">자유게시판</option>
            <option value="question">질문과 답변</option>
            <option value="join">가입인사</option>
            <option value="fan">팬아트</option>
            <option value="hand">손그림</option>
            <option value="com">커미션</option>
          </select>
          <div>
            <input
              type="text"
              style={{ width: "650px", height: "2rem", padding: "5px" }}
              placeholder="제목을 입력하세요"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </Contents>

        <Content>
          <textarea
            style={{ width: "650px", height: "500px", padding: "5px" }}
            placeholder="내용을 입력하세요"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </Content>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit">올리기</Button>
          <Button>삭제</Button>
        </div>
      </Container>
    </>
  );
}
