import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { getTodos, setTodosFromLocalStorage } from 'src/store/reducer';
import { TodoItem } from '../TodoItem';

export const Todos = (): JSX.Element => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setTodosFromLocalStorage());
  }, [dispatch]);

  return (
    <TodosWrapper data-testid="todos">
      {todos.map((todo) => {
        const isDisabled = isEditClicked && !todo.isEditMode;
        return (
          <TodoContainer key={todo.id} isDisabled={isDisabled}>
            <TodoItem
              todo={todo}
              setIsEditClicked={setIsEditClicked}
              isDisabled={isDisabled}
            />
          </TodoContainer>
        );
      })}
    </TodosWrapper>
  );
};

const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
`;

const TodoContainer = styled.div<{ isDisabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  animation: ${keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`} 0.5s ease-in-out;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
`;
