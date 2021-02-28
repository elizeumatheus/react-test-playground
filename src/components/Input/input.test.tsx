import { render, fireEvent } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
  it('should render the component in the DOM', () => {
    const { getByTestId } = render(<Input data-testid="test-input" />)

    expect(getByTestId('test-input')).toBeInTheDocument()
  })

  it('should render the label of the input', () => {
    const { getByText } = render(
      <Input data-testid="test-input" label="input label" />
    )

    expect(getByText('input label')).toBeInTheDocument()
  })

  it('should render the error message when exists', () => {
    const { getByText } = render(
      <Input data-testid="test-input" error="this is an error" />
    )

    expect(getByText('this is an error')).toBeInTheDocument()
  })

  it('should changes the value of the input', () => {
    let value = ''
    const onChange = jest.fn((e) => (value = e.target.value))

    const { getByTestId } = render(
      <Input data-testid="test-input" value={value} onChange={onChange} />
    )

    fireEvent.change(getByTestId('test-input'), { target: { value: '1' } })

    expect(value).toEqual('1')
  })
})
