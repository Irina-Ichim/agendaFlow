import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgendaFlow heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/AgendaFlow/i);
  expect(headingElement).toBeInTheDocument();
});


