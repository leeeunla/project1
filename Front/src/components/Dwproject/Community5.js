import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { BoardContext } from "./Board";
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`;
const Community5 = () => {
  const { boardList, SetBoardList } = useContext(BoardContext);
  return (
    <>
      <h2 style={{ color: "white", padding: "30px" }}>
        가입인사
        <Icon icon="solar:star-line-duotone" />
      </h2>
      <Container>
        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성날짜</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", cursor: "pointer" }}>
            {boardList
              .filter((item) => item.category === "join")
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  {/* <td>{item.text.substr(0, 11)}</td> */}
                  <td>{item.author}</td>
                  <td>{item.createAt.substr(0, 10)}</td>
                  {/* <td>{item.category}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Community5;
