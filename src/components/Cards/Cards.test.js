import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './Cards';

test('renders Cards', () => {
  render(<Cards />);
  const linkElement = screen.getByTestId(/Cards/i);
  expect(linkElement).toBeInTheDocument();
});

test('render check button and delete button', () => {
  render(<Cards />);
  const checkButton = screen.getByTestId(/check/i);
  const deleteButton = screen.getByTestId(/delete/i);
  expect(checkButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});

test('click check button', () => {
  render(<Cards />);
  const checkButton = screen.getByTestId(/check/i);
  expect(checkButton).toBeInTheDocument();
  checkButton.click();
  const checkButtonAfterClick = screen.getByTestId(/task-description/i);
  expect(checkButtonAfterClick).toHaveStyle('text-decoration: line-through;');
});

test('click delete button', () => {
  render(<Cards />);
  const deleteButton = screen.getByTestId(/delete/i);
  expect(deleteButton).toBeInTheDocument();
  deleteButton.click();
  const deleteButtonAfterClick = screen.getByTestId(/Cards/i);
  expect(deleteButtonAfterClick).not.toBeInTheDocument();
});
