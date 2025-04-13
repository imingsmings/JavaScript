import { render, screen } from '@testing-library/react'
import GetByQueries from '../../src/components/GetByQueries'

describe('GetByQueries', () => {
  test('should render the component with the correct heading', () => {
    render(<GetByQueries />)
    const heading = screen.getByText('Component')
    expect(heading).toBeInTheDocument()
  })

  test('should find an input with placeholder text', () => {
    render(<GetByQueries />)
    const inputField = screen.getByPlaceholderText('Enter Text')
    expect(inputField).toBeInTheDocument()
  })

  test('should find an anchor with specific href', () => {
    render(<GetByQueries />)
    const link = screen.getByRole('link', { name: /Visit Example/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  test('should find a div using data-testid', () => {
    render(<GetByQueries />)
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
  })

  test('should find an element by its role', () => {
    render(<GetByQueries />)
    const button = screen.getByRole('button', { name: 'submit' })
    expect(button).toBeInTheDocument()
  })
})
