import { Product } from '@/entities'

export type UseCase = (restaurantID: string) => Promise<Product[]>
