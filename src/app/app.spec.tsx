import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'src/styles/ThemeProvider';
import { store } from 'src/store/store';
import { App } from './App';

describe('App', () => {
  test('renders header and todos components', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('todos')).toBeInTheDocument();
  });
});
