export type Restaurant = {
  id: string
  imageURL: string
  name: string
  category: string
  rating: number
  distance: number
  deliveryTimeRange: [number, number]
  deliveryTax: number
}
