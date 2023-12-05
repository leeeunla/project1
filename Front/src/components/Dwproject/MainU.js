import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Community from "./Community";
import Community1 from "./Community1";
import Community2 from "./Community2";
import Community3 from "./Community3";
import Community4 from "./Community4";
import Community5 from "./Community5";
import Community6 from "./Community6";
import Community7 from "./Community7";
import Community8 from "./Community8";

const Container = styled.div`
  /* background-color: white; */
`;

const Content = styled.div`
  text-align: center;
  padding-top: 2.5px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

export function MainU() {
  const { id } = useParams();
  console.log("id =", id);
  return (
    <>
      {id == 0 ? (
        <Community />
      ) : id == 1 ? (
        <Community1 />
      ) : id == 2 ? (
        <Community2 />
      ) : id == 3 ? (
        <Community3 />
      ) : id == 4 ? (
        <Community4 />
      ) : id == 5 ? (
        <Community5 />
      ) : id == 6 ? (
        <Community6 />
      ) : id == 7 ? (
        <Community7 />
      ) : id == 8 ? (
        <Community8 />
      ) : null}
    </>
  );
}
