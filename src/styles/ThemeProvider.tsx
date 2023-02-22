import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { theme } from './theme';

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
);
