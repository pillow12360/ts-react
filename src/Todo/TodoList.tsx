import React from 'react';

const TodoList: React.FC = ({}) => {
  const TodoList = [
    {
      title: '할일 1',
      content: '내용',
    },
    {
      title: '할일 2',
      content: '내용',
    },
  ];

  return (
    <>
      {TodoList.map((list, index) => {
        return (
          <div key={index}>
            <h1>{list.title}</h1>
            <p>{list.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
