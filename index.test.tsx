import { render, screen } from '@testing-library/react'

describe('Sample Describe', () => {
  it('renders hello world correctly', () => {
    render(<h1>Hello World</h1>)

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  it('expects correctly', () => {
    expect(true).toBe(true)
  })
})
