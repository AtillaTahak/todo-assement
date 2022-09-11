import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './index';
import theme from '../../assets/styles/theme';

test('renders footer Home', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render footer Dark Mode', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/Dark Mode/i);
  expect(linkElement).toBeInTheDocument();
});

test('render footer Add', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  );
  const linkElement = screen.getByTestId('add');
  expect(linkElement).toBeInTheDocument();
});
