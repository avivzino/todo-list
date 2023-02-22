import { Provider } from 'react-redux';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from 'src/store/store';
import { ThemeProvider } from 'src/styles/ThemeProvider';
import { Header } from 'src/components/Header';
import { Todos } from 'src/components/Todos';
import { Footer } from 'src/components/Footer';
import { theme } from 'src/styles/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StyledToast />
        <ScreenWrapper>
          <Header />
          <Todos />
          <Footer />
        </ScreenWrapper>
      </ThemeProvider>
    </Provider>
  );
};

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0.5rem;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.whiteLightBlue};
  border: 0.2rem solid ${theme.colors.lightBlue};
`;

const StyledToast = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.whiteLightBlue};
  }
`;
