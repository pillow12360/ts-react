import React, { FC, useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const Todo: React.FC = () => {
  const [TodoList, setTodoList] = useState([
    {
      id: 1,
      title: '운동하기',
      completed: true,
    },
    {
      id: 2,
      title: '빨래하기',
      completed: true,
    },
    {
      id: 3,
      title: '청소하기',
      completed: false,
    },
  ]);

  const handleAddtodo = (title: string) => {
    const newTodo = {
      id: TodoList.length + 1,
      title: title,
      completed: false,
    };
    setTodoList([...TodoList, newTodo]);
  };

  const togleTodo = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <>
      {TodoList.map((todo) => (
        <TodoItem
          key={todo.id} // key 속성 추가
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          togleTodo={togleTodo}
        />
      ))}
      <TodoInput handleAddtodo={handleAddtodo} />
    </>
  );
};

export default Todo;
