import { Order, PaymentMethod, ProductOrder } from '@/entities/order'

export type Repository = (props: Props) => Promise<OrderID>

type Props = {
  products: ProductOrder[]
  paymentMethod: PaymentMethod
}

type OrderID = number
