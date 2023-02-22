import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenericButton } from 'src/common';
import { addTodo, getTodos } from 'src/store/reducer';
import { Color, theme as styledTheme } from 'src/styles/theme';
import styled from 'styled-components';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState<string>('');
  const todos = useSelector(getTodos);

  const handleItemChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    const { value } = ev.target;
    setItem(value);
  };

  const handleAddTodo = () => {
    if (item !== '') {
      const id = Math.floor(Math.random() * 1000);
      const newItem = {
        id,
        item,
        completed: false,
        editMode: false,
      };
      dispatch(addTodo(newItem));
      const updatedTodos = [...todos, newItem];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setItem('');
    }
  };

  return (
    <AddTodoWrapper>
      <ItemInput value={item} onChange={handleItemChange} />
      <GenericButton
        onClick={handleAddTodo}
        text="Add a Todo"
        width="8rem"
        hoverColor={styledTheme.colors.darkBlue as Color}
      />
    </AddTodoWrapper>
  );
};

const AddTodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  border: 0.2rem solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.5rem;
`;

const ItemInput = styled.input`
  font-size: ${({ theme }) => theme.textSizes.s}rem;
  color: ${({ theme }) => theme.colors.blue};
  font-family: Sans-serif;
  border: none;
  width: 80%;
  height: 1.3rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
`;
