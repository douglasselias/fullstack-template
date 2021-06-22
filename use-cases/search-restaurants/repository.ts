export type Repository = (query: string) => Promise<Restaurant[]>

type Restaurant = {
  imageURL: string
  name: string
  category: string
  rating: number
  distance: number
  deliveryTimeRange: [number, number]
  deliveryTax: number
}
