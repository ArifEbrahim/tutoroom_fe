import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct header element', () => {
  render(<App />);
  const headerElement = screen.getByText('Tutors');
  expect(headerElement).toBeInTheDocument();
});

