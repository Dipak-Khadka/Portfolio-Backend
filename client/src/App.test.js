import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home text', () => {
  render(<App />);
  const homeText = screen.getByText(/home/i);
  expect(homeText).toBeInTheDocument();
});
