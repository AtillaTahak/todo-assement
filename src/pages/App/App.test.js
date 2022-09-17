import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { DataContext } from '../../context/DataContext';

const [openForm, setOpenForm] = useState(false);
const [colorMode, setColorMode] = useState('light');
const [methods, setMethods] = useState({});

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
    {component}
  </DataContext.Provider>,
);
test('renders header', () => {
  renderComponent(<App />);
  const linkElement = screen.getByTestId(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
