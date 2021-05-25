import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('renders Yolo World as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...nothing

    // Assert
    const yoloWorldElement = screen.getByText('Yolo World')
    expect(yoloWorldElement).toBeInTheDocument()
  })

  test('renders Good to see you if button was NOT clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...nothing
    // Assert
    const outputElement = screen.getByText('Good to see you')
    expect(outputElement).toBeInTheDocument()
  })

  test('renders Changed if the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // click button
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Changed!')
    expect(outputElement).toBeInTheDocument()
  })

  test('does NOT render Good to see you if button was clicked', () => {
    render(<Greeting />)

    // Act
    // click button
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.queryByText('good to see you!', {
      exact: false,
    })
    expect(outputElement).toBeNull()
  })
})
