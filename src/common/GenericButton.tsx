import styled from 'styled-components';
import { Color } from 'src/styles/theme';

interface GenericButtonProps {
  onClick: () => void;
  text: string;
  width?: string;
  hoverColor?: Color;
  isBorder?: boolean;
}

export const GenericButton = ({
  onClick,
  text,
  width,
  hoverColor,
  isBorder,
}: GenericButtonProps) => (
  <StyledGenericButton
    onClick={onClick}
    width={width}
    hoverColor={hoverColor}
    isBorder={isBorder}
  >
    {text}
  </StyledGenericButton>
);

const StyledGenericButton = styled.div<{
  width?: string;
  hoverColor?: Color;
  isBorder?: boolean;
}>`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.textSizes.s}rem;
  font-family: Sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width ?? '13rem'};
  height: 1.3rem;
  padding: 0.3rem;

  border: ${({ isBorder, theme }) =>
    isBorder ? `0.2rem solid  ${theme.colors.lightBlue}` : 'none'};
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, hoverColor }) =>
      hoverColor ?? theme.colors.blue};
  }
`;
