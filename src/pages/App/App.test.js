import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Tasks/i);
  expect(linkElement).toBeInTheDocument();
});
