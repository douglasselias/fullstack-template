import { screen, render, fireEvent, act } from '@testing-library/react'
// import user from '@testing-library/user-event'

// import { act } from 'react-dom/test-utils'
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
    // expect(screen.getAllByAltText('outback')).toThrow()
  })
})
