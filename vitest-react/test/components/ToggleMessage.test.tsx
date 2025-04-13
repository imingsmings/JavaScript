import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToggleMessage from '../../src/components/ToogleMessage'

describe('ToggleMessage Component', () => {
  test('should toogle the message visibility when the button is clicked', async () => {
    render(<ToggleMessage />)

    const button = screen.getByRole('button', { name: /Toggle/ })

    expect(screen.queryByText(/This message is visible/i)).toBeNull()

    await userEvent.click(button)

    expect(screen.getByText(/This message is visible/i)).toBeInTheDocument()

    await userEvent.click(button)

    expect(screen.queryByText(/This message is visible/i)).toBeNull()
  })
})
