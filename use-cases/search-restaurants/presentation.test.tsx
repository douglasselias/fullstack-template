import { screen, render, fireEvent, act } from '@testing-library/react'

import { Presentation } from './presentation'

describe('Search Restaurants - Presentation', () => {
  it('returns empty list when no query is provided', async () => {
    const useCase = jest.fn().mockResolvedValue([])
    act(() => {
      render(<Presentation useCase={useCase} />)
    })

    const searchInput = await screen.findByLabelText(/pesquisar/i)
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'outback' } })
    })

    expect(useCase).toHaveBeenCalledWith('outback')
  })

  it('returns list of restaurants', async () => {
    const useCase = jest
      .fn()
      .mockResolvedValue([
        { name: 'outback - iguatemi' },
        { name: 'outback - dom pedro' },
      ])
    act(() => {
      render(<Presentation useCase={useCase} />)
    })

    const restaurant0 = await screen.findByText(/iguatemi/i)
    const restaurant1 = await screen.findByText(/dom pedro/i)

    expect(restaurant0).toBeInTheDocument()
    expect(restaurant1).toBeInTheDocument()
  })
})
