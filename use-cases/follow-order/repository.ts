export type Repository = (orderID: number) => Promise<OrderStatus>

type OrderStatus = {
  deliveryForecast: string
  status: string
}
