import { PaymentMethod } from '@/entities'

export type Gateway = {
  makePayment(paymentMethod: PaymentMethod): boolean
}
