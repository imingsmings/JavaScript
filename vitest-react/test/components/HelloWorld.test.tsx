import { render, screen } from '@testing-library/react'
import HelloWorld from '../../src/components/HelloWorld'

describe('Hello World Component', () => {
  test('should render a Hello World Component', () => {
    render(<HelloWorld />)
    expect(screen.getByText('HelloWorld')).toBeInTheDocument()
  })
})
