import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'src/store/store';
import { Header } from './Header';
import { theme } from 'src/styles/theme';

describe('Header component', () => {
  it('should render the title text', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Provider>
    );

    const title = screen.getByText('THINGS TO DO:');

    expect(title).toBeInTheDocument();
  });
});
