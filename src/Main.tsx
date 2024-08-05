import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h1>동찬 타입스크립트 + 리액트 프로젝트 홈</h1>
      <br />
      <Link to="todo">Todo 어플리케이션</Link>
    </>
  );
};

export default Main;
