import { render, screen } from '@testing-library/react'
import GetAllByQueries from '../../src/components/GetAllByQueries'

describe('GetAllByQueries', () => {
  test('should render multiple elements that can be queries by various methods', () => {
    render(<GetAllByQueries />)

    const inputsByLabelText = screen.getAllByLabelText(/Label for Input/i)
    expect(inputsByLabelText.length).toBe(2)
    inputsByLabelText.forEach((input) => {
      expect(input).toBeInTheDocument()
      expect(input).toBeDisabled()
    })

    const inputsByPlaceholderText = screen.getAllByPlaceholderText(/Enter Something/i)
    expect(inputsByPlaceholderText.length).toBe(2)
    inputsByPlaceholderText.forEach((input) => {
      expect(input).toBeInTheDocument()
      expect(input).toBeDisabled()
    })

    const pByText = screen.getAllByText(/this is a paragraph/i)
    expect(pByText.length).toBe(2)
    pByText.forEach((p) => {
      expect(p).toBeInTheDocument()
    })

    const displayValues = screen.getAllByDisplayValue(/Some display value/i)
    expect(displayValues.length).toBe(1)
    expect(displayValues[0]).toBeInTheDocument()
    expect(displayValues[0]).toBeDisabled()

    const altText = screen.getAllByAltText(/image/i)
    expect(altText.length).toBe(2)

    const divsByTestId = screen.getAllByTestId(/custom-test-id-\d/i)
    expect(divsByTestId.length).toBe(2)
  })
})
