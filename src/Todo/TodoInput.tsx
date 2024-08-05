import React, { useState } from 'react';

interface TodoInputProps {
  handleAddtodo: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ handleAddtodo }) => {
  const [content, setContent] = useState('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    if (content.trim()) {
      handleAddtodo(content); // 부모 컴포넌트로 입력된 내용 전달
      setContent(''); // 입력 필드 초기화
    }
  };

  return (
    <>
      <input type="text" value={content} onChange={handleInput} />
      <button onClick={handleSubmit}>할일 추가</button>
    </>
  );
};

export default TodoInput;
