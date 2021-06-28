import { Product } from '@/entities/product'

export type Repository = (restaurantID: string) => Promise<Product[]>
