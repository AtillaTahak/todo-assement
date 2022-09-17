import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Footer from './index';
import theme from '../../assets/styles/theme';

const appendMethod = (method) => {
  setMethods((prev) => ({ ...prev, [method.name]: method }));
};

const data = {
  openForm,
  setOpenForm,
  colorMode,
  setColorMode,
  ...methods,
  appendMethod,
};

const renderComponent = (component) => render(
  <DataContext.Provider value={data}>
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  </DataContext.Provider>,
);

test('renders footer Home', () => {
  renderComponent(<Footer />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render footer Dark Mode', () => {
  renderComponent(<Footer />);

  const linkElement = screen.getByText(/Dark Mode/i);
  expect(linkElement).toBeInTheDocument();
});

test('render footer Add', () => {
  renderComponent(<Footer />);
  const linkElement = screen.getByTestId('add');
  expect(linkElement).toBeInTheDocument();
});
