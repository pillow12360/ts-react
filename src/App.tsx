import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import Main from './Main';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
