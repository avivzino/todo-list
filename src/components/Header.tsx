import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { AddTodo } from './AddTodo';

export const Header = () => {
  return (
    <Wrapper>
      <TitleText>THINGS TO DO:</TitleText>
      <AddTodo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 35px auto;
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
  margin-bottom: 25px;
`;
