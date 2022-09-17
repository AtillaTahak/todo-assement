import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './index';
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

test('renders header', () => {
  renderComponent(
    <Header title="Search" />,
  );
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
