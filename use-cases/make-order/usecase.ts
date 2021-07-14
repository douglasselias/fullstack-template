import { PaymentMethod, ProductOrder } from '@/entities'

export type UseCase = (props: Props) => Promise<OrderID>

export type Props = {
  products: ProductOrder[]
  paymentMethod: PaymentMethod
}

type OrderID = number
