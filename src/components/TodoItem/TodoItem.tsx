import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  completeTodo,
  editTodo,
  getTodos,
  removeTodo,
  toggleEditMode,
} from 'src/store/reducer';
import { TodoItemType } from 'src/types/store';
import {
  CompletedIcon,
  EditIcon,
  RemoveIcon,
  SaveEditIcon,
} from 'src/assets/Icons';

interface TodoItemProps {
  todo: TodoItemType;
  setIsEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
}

export const TodoItem = ({
  todo: { id, item, editMode, completed },
  setIsEditClicked,
  isDisabled,
}: TodoItemProps) => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const inputRef = useRef<HTMLInputElement>(null); // Create a reference to the input element
  const [newItem, setNewItem] = useState<string>(item);

  const handleEditClick = (id: number) => {
    dispatch(toggleEditMode(id));
    setIsEditClicked(true);
  };

  const handleSaveEditClick = (id: number) => {
    dispatch(editTodo({ id, newItem }));
    setIsEditClicked(false);
  };

  const handleItemChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    const { value } = ev.target;
    setNewItem(value);
  };

  useEffect(() => {
    // Focus the input field when edit mode is enabled
    if (inputRef.current && editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <TodoText
        ref={inputRef}
        value={newItem}
        isCompleted={!!completed}
        onMouseDown={(e) => !editMode && e.preventDefault()}
        onChange={handleItemChange}
      />
      {editMode ? (
        <IconButton onClick={() => handleSaveEditClick(id)}>
          <SaveEditIcon />
        </IconButton>
      ) : (
        <IconsContainer>
          {!completed && (
            <>
              <IconButton
                onClick={() => !isDisabled && dispatch(completeTodo(id))}
              >
                <CompletedIcon />
              </IconButton>
              <IconButton onClick={() => !isDisabled && handleEditClick(id)}>
                <EditIcon />
              </IconButton>
            </>
          )}
          <IconButton onClick={() => !isDisabled && dispatch(removeTodo(id))}>
            <RemoveIcon />
          </IconButton>
        </IconsContainer>
      )}
    </>
  );
};

const TodoText = styled.input<{ isCompleted: boolean }>`
  font-size: ${({ theme }) => theme.textSizes.m}rem;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.lightBlue : theme.colors.blue};
  font-family: Sans-serif;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  border: none;
  background-color: transparent;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconButton = styled.div`
  cursor: pointer;
  padding-inline-start: 0.5rem;
  &:hover {
    opacity: 0.5;
  }
`;
