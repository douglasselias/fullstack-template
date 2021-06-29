import { Product } from './product'

export type Order = {
  id: number
  products: ProductOrder[]
  total: number
  paymentMethod: PaymentMethod
}

export type ProductOrder = Pick<Product, 'id' | 'price'> & { quantity: number }
export type PaymentMethod = 'CARD' | 'MONEY' | 'PIX'

const o: Order = {
  id: 111,
  products: [
    {
      id: 'abc',
      price: 40.59,
      quantity: 2,
    },
  ],
  total: 2 * 40.59,
  paymentMethod: 'PIX',
}
