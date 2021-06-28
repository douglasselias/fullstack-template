import { Product } from '@/entities/product'

export type UseCase = (restaurantID: string) => Promise<Product[]>
