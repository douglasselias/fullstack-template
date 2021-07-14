import { Restaurant } from '@/entities'

export type UseCase = (query: string) => Promise<Restaurant[]>
