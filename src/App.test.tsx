import { render, screen } from '@testing-library/react'
import App from './App'

test('renders landing page', () => {
  render(<App />)
  const labelAElement = screen.getByText('Size of collection A')
  const labelBElement = screen.getByText('Size of collection B')
  expect(labelAElement).toBeInTheDocument()
  expect(labelBElement).toBeInTheDocument()
})
