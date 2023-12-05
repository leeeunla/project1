import React, { createContext, useEffect, useState } from "react";

import MySwiper from "./MySwiper";
import { Header } from "./Header";
import { MainT } from "./MainT";
import styled from "styled-components";
import { NaviText } from "./NaviText";
import { Footer } from "./Footer";
import { MainU } from "./MainU";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getAllBoard, login, singup } from "./api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Writing } from "./Writing";
import { Login } from "./Login";
import { SingUp } from "./SingUp";
import { Logout } from "./Logout";
const client = new QueryClient();
export const BoardContext = createContext();
export function Board() {
  const { data, isLoading } = useQuery("board", getAllBoard);
  console.log(data);
  return (
    <>
      <QueryClientProvider client={client}>
        {!isLoading && data && data.data.length > 0 && (
          <>
            <BoardLoader board={data.data} />
          </>
        )}
      </QueryClientProvider>
    </>
  );
}

function BoardLoader({ board }) {
  const [boardList, setBoardList] = useState(board);
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("loginState"))
  );
  return (
    <>
      <BoardContext.Provider value={{ boardList, loginState, setLoginState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NaviText />}>
              <Route path="mainu/:id" element={<MainU />} />
              <Route path="writing" element={<Writing />} />
              <Route path="login" element={<Login />} />
              <Route path="singup" element={<SingUp />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BoardContext.Provider>
    </>
  );
}
