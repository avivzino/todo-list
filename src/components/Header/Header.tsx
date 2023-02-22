import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { AddTodo } from '../AddTodo';

export const Header = () => {
  return (
    <HeaderWrapper data-testid="header">
      <TitleText>THINGS TO DO:</TitleText>
      <AddTodo data-testid="add-todo" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  margin: 4rem auto;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const TitleText = styled.div`
  font-size: ${({ theme }) => theme.textSizes.l}rem;
  font-family: Sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  animation: 2s ${keyframes`${fadeIn}`} alternate;
  margin-bottom: 3.5rem;
`;
