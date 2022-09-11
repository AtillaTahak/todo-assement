import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Header from './index';
import theme from '../../assets/styles/theme';

test('renders header', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header title="Search" />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
