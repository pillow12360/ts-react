import React from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  togleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  togleTodo,
}) => {
  return (
    <div
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => togleTodo(id)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default TodoItem;
