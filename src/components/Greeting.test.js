import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('renders Yolo World as a text', () => {
  // Arrange
  render(<Greeting />)

  // Act
  // ...nothing

  // Assert
  const yoloWorldElement = screen.getByText('Yolo World')
  expect(yoloWorldElement).toBeInTheDocument()
})
