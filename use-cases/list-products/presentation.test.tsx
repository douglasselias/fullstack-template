import { screen, render, act } from '@testing-library/react'

import { Presentation } from './presentation'

describe('List Products - Presentation', () => {
  it('returns list of products from restaurant', async () => {
    const useCase = jest.fn().mockResolvedValue([
      { id: 1, name: 'Hamburger' },
      { id: 2, name: 'Batata Frita' },
      { id: 3, name: 'Chá Gelado' },
    ])
    act(() => {
      render(<Presentation useCase={useCase} restaurantID={'abc-123'} />)
    })

    const hamburger = await screen.findByText(/hamburger/i)
    const frenchFries = await screen.findByText(/batata frita/i)
    const iceTea = await screen.findByText(/chá gelado/i)

    expect(hamburger).toBeInTheDocument()
    expect(frenchFries).toBeInTheDocument()
    expect(iceTea).toBeInTheDocument()
  })
})
