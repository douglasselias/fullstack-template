import { Order, PaymentMethod, ProductOrder } from '@/entities/order'

export type UseCase = (props: Props) => Promise<Order>

export type Props = {
  products: ProductOrder[]
  paymentMethod: PaymentMethod
}
