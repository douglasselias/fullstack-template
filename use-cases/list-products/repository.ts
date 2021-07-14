import { Product } from '@/entities'

export type Repository = (restaurantID: string) => Promise<Product[]>
