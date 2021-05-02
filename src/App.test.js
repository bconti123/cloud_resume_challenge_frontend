import { render, screen } from '@testing-library/react';
import App from './App';

test('Bryant Conti Cloud Computing Enthusiast', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cloud Computing Enthusiast/i);
  expect(linkElement).toBeInTheDocument();
});

test('Email me', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email me/i);
  const name = screen.getByText(/bconti00@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
