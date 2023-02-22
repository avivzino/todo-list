import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { getTodos } from 'src/store/reducer';
import { TodoItem } from './TodoItem';
import { useState } from 'react';

export const Todos = () => {
  const todos = useSelector(getTodos);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);

  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoContainer
          key={todo.id}
          isEditClicked={isEditClicked && !todo.editMode}
        >
          <TodoItem todo={todo} setIsEditClicked={setIsEditClicked} />
        </TodoContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 30%;
`;

const TodoContainer = styled.div<{ isEditClicked: boolean }>`
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`} 0.5s ease-in-out;
  opacity: ${({ isEditClicked }) => (isEditClicked ? 0.3 : 1)};
`;
