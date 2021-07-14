import { Order, PaymentMethod, ProductOrder } from '@/entities'

export type UseCase = (props: Props) => Promise<Order>

export type Props = {
  products: ProductOrder[]
  paymentMethod: PaymentMethod
}
