import { screen, render, fireEvent, act } from '@testing-library/react'

import { Presentation } from './presentation'

describe('Search Restaurants - Presentation', () => {
  it('calls use case with specified query', async () => {
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

  it('returns all restaurants', async () => {
    const useCase = jest.fn().mockResolvedValue([
      {
        id: 1,
        name: 'outback',
        deliveryTimeRange: [0, 0],
      },
      {
        id: 2,
        name: 'casa do yakisoba',
        deliveryTimeRange: [0, 0],
      },
    ])
    act(() => {
      render(<Presentation useCase={useCase} />)
    })

    const restaurant0 = await screen.findByText(/outback/i)
    const restaurant1 = await screen.findByText(/yakisoba/i)

    expect(restaurant0).toBeInTheDocument()
    expect(restaurant1).toBeInTheDocument()
  })
})
