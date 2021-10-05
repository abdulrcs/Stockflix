import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Navbar from '../Navbar'

test('Rendered navbar', () => {
  render(<Navbar />)
})
