import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Firefly Castle Development text', () => {
  render(<App />);
  const sut = screen.getByText(/Welcome to Firefly Castle Development/i);
  expect(sut).toBeInTheDocument();
});
