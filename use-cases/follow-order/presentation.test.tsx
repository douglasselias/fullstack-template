import { screen, render, act } from '@testing-library/react'

import { Presentation } from './presentation'

describe('Follow Order - Presentation', () => {
  it('returns order', async () => {
    const useCase = jest.fn().mockResolvedValue({
      deliveryForecast: '12:00',
      status: 'PREPARING',
    })
    act(() => {
      render(<Presentation useCase={useCase} orderID={123} />)
    })

    const forecast = await screen.findByText(/horário aproximado de chegada/i)
    const status = await screen.findByText(/status/i)

    expect(forecast).toBeInTheDocument()
    expect(status).toBeInTheDocument()
  })
})
