import styled from "styled-components";
import { Board } from "./Board";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { BoardContext } from "./Board";
import { Outlet } from "react-router-dom";

const H3 = styled.div`
  font-size: 40px;
`;

const Div = styled.div`
  color: #fff;
  padding: 35px;
  text-align: center;
  font-size: 20px;
  border-bottom: 0.8px solid gray;
  font-family: TheJamsil5Bold;
  font-size: 25px;
  color: rgba(231, 237, 249, 1);
  text-shadow: 3px 2px 1px gray;
  @font-face {
    font-family: "TheJamsil5Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }
`;

export function Header() {
  const { boardList } = useContext(BoardContext);
  console.log(boardList);
  return (
    <>
      <Div>
        <H3>Dw Story 커 뮤 니 티</H3>
      </Div>
    </>
  );
}
