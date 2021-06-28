import { Restaurant } from '@/entities/restaurant'

export type UseCase = (query: string) => Promise<Restaurant[]>

/**
 * 
 type Restaurant = {
   imageURL: string
   name: string
   category: string
   rating: number
   distance: number
   deliveryTimeRange: [number, number]
   deliveryTax: number
  }
  */
