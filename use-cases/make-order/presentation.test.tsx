import { screen, render } from '@testing-library/react'

import { Presentation } from './presentation'

describe('Make Order - Presentation', () => {
  it('returns success message', async () => {
    const useCase = jest.fn().mockResolvedValue(123)
    const paymentMethod = 'PIX'
    const products = []

    render(
      <Presentation
        useCase={useCase}
        paymentMethod={paymentMethod}
        products={products}
      />
    )

    const makeOrderButton = await screen.findByText(/fazer pedido/i)
    makeOrderButton.click()

    const message = await screen.findByText(/pedido realizado com sucesso/i)
    expect(message).toBeInTheDocument()
    expect(useCase).toHaveBeenCalledWith({ paymentMethod, products })
  })

  it('returns error message', async () => {
    const useCase = jest.fn().mockResolvedValue('Erro no pagamento')
    const paymentMethod = 'PIX'
    const products = []

    render(
      <Presentation
        useCase={useCase}
        paymentMethod={paymentMethod}
        products={products}
      />
    )

    const makeOrderButton = await screen.findByText(/fazer pedido/i)
    makeOrderButton.click()

    const message = await screen.findByText(/erro no pedido/i)
    expect(message).toBeInTheDocument()
  })
})
