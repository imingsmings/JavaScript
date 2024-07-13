import {
    render,
    screen,
    fireEvent
} from '@testing-library/react'
import HiddenMessage from '../components/HiddenMessage'

test('Hide Message', () => {
    const testMessage = 'This is a testing message'
    render(<HiddenMessage>{testMessage}</HiddenMessage>)
    expect(screen.queryByText(testMessage)).toBeNull()
    fireEvent.click(screen.getByLabelText('Show Info'))
    expect(
        screen.getByText(testMessage)
    ).toBeInTheDocument()
})
