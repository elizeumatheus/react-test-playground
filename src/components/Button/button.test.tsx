import { render, fireEvent } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the component in the DOM', () => {
    const { getByText } = render(<Button>button</Button>)

    expect(getByText('button')).toBeInTheDocument()
  })

  it("should have the class 'test' when setted as a custom class", () => {
    const { getByText } = render(<Button className="test">button</Button>)

    expect(getByText('button')).toHaveClass('test')
  })

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Button onClick={onClick}>button</Button>)

    fireEvent.click(getByText('button'))

    expect(onClick).toHaveBeenCalled()
  })

  it('should be disabled when set the disabled attribute', () => {
    const { getByText } = render(<Button disabled>button</Button>)

    expect(getByText('button')).toBeDisabled()
  })
})
