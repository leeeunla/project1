export function login(userLogin) {
  //로그인
  return fetch(`http://localhost:8080/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin),
  }).then((response) => response.json());
}

export function logout() {
  return fetch(`http://localhost:8080/api/logout`, {
    method: "POST",
  }).then((response) => response.json());
}
export function getAllBoard() {
  //게시판
  return fetch(`http://localhost:8080/api/board`, {
    method: "GET",
  }).then((response) => response.json());
}

export function singup(signUp) {
  //회원가입
  return fetch(`http://localhost:8080/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUp),
  }).then((response) => response.json());
}

export function writing(board) {
  // 글쓰기
  return fetch(`http://localhost:8080/api/board`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(board),
  }).then((response) => response.json());
}

export function mainU() {
  // 글 삭제
  return (fetch("http://localhost:8080/api/board/delete/{board_id}"),
  {
    method: "DELETE",
  }).then((response) => response.json());
}
