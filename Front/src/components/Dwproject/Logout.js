import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "./Board";

export function Logout() {
  const { setLoginState } = useContext(BoardContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loginState", JSON.stringify({ id: null }));
    setLoginState({ id: null });
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
