import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearList, getTodos } from 'src/store/reducer';
import { GenericButton } from 'src/common';
import { Color, theme as styledTheme } from 'src/styles/theme';

export const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  console.log(todos);

  return (
    <FooterWrapper>
      {todos.length > 0 && (
        <GenericButton
          onClick={() => dispatch(clearList())}
          text="Clear my list!"
          width="13rem"
          hoverColor={styledTheme.colors.red as Color}
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
