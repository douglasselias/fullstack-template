import { PaymentMethod } from '@/entities/order'

import { interactor } from './interactor'

const order = {
  id: 111,
  products: [
    {
      id: 'abc',
      price: 40.59,
      quantity: 2,
    },
  ],
  paymentMethod: 'PIX' as PaymentMethod,
}

describe('Make order - Interactor', () => {
  it('returns error message', async () => {
    const repository = jest.fn()
    const gateway = { makePayment: jest.fn(() => false) }
    const makeOrder = interactor({ repository, gateway })

    const result = await makeOrder(order)

    expect(result).toMatch(/erro no pagamento/i)
  })

  it('calls repository with specified order', async () => {
    const repository = jest.fn()
    const gateway = { makePayment: jest.fn(() => true) }
    const makeOrder = interactor({ repository, gateway })

    await makeOrder(order)

    expect(repository).toHaveBeenCalledWith(order)
  })
})
