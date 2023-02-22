import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Header, Todos } from 'src/components';
import { ThemeProvider } from 'src/styles/ThemeProvider';
import { store } from 'src/store/store';

const ScreenWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteLightBlue};
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  overflow-x: hidden;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ScreenWrapper>
          <Header />
          <Todos />
        </ScreenWrapper>
      </ThemeProvider>
    </Provider>
  );
};
