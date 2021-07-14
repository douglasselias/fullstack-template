import { PaymentMethod } from '@/entities'

function makePayment(paymentMethod: PaymentMethod) {
  return paymentMethod !== 'CARD'
}

export { makePayment }
