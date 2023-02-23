import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearList, getTodos } from 'src/store/reducer';
import { GenericButton } from 'src/common';
import { theme as styledTheme } from 'src/styles/theme';

export const Footer = (): JSX.Element => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const handleClearList = (): void => {
    dispatch(clearList());
  };

  return (
    <FooterWrapper>
      {todos.length > 0 && (
        <GenericButton
          onClick={handleClearList}
          text="Clear my list!"
          width="13rem"
          hoverColor={styledTheme.colors.red}
          isBorder
        />
      )}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 4rem;
`;
