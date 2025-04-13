import { render, screen } from '@testing-library/react'
import List from '../../src/components/List'

describe('List Component', () => {
  test('should render a list', () => {
    const data = ['JavaScript', 'Golang', 'Swift']
    render(<List data={data} />)

    data.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  test('should render a emptu list', () => {
    render(<List data={[]} />)
    expect(screen.getByText('No Data')).toBeInTheDocument()
  })
})
