import { render, screen } from '@testing-library/react';
import App from './App';

test('header element is correctly rendered', () => {
  render(<App />);
  const headerElement = screen.getByText('Tutors');
  expect(headerElement).toBeInTheDocument();
});

