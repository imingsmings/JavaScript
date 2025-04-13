import { render, screen } from '@testing-library/react'
import FindingElement from '../../src/components/FindingElement'

describe('FindingElementByRole', () => {
  test('should query a link element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  test('should query a button element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should query a footer element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  test('should query a h1 element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  test('should query a header element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  test('should query a img element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('should query a input element', () => {
    render(<FindingElement />)
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })

  // ul -> list
  // li -> listitem
})
