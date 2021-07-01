export type UseCase = (orderID: number) => Promise<OrderStatus>

export type OrderStatus = {
  deliveryForecast: string
  status:
    | 'SENT'
    | 'ACCEPTED'
    | 'PREPARING'
    | 'DELIVERED'
    | 'CONCLUDED'
    | 'UNKNOWN'
}
