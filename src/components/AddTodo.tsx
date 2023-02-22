import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'src/store/reducer';
import styled from 'styled-components';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState<string>('');

  const handleItemChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    const { value } = ev.target;
    setItem(value);
  };

  const handleAddTodo = () => {
    if (item !== '') {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000),
          item,
          completed: false,
          editMode: false,
        })
      );
      setItem('');
    }
  };

  return (
    <Wrapper>
      <ItemInput value={item} onChange={handleItemChange} />
      <AddTodoButton onClick={handleAddTodo}>Add Item</AddTodoButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  width: 83%;
  height: 1.3rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
`;

const AddTodoButton = styled.div`
  font-size: ${({ theme }) => theme.textSizes.s}rem;
  font-family: Sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17%;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.lightBlue};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lightBlue};
  padding: 0.3rem;
  height: 1.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
