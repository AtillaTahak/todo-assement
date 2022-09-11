import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Header from './index';
import theme from '../../assets/styles/theme';

test('renders header', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header title="My Test" />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/My Test/i);
  expect(linkElement).toBeInTheDocument();
});
