import { Restaurant } from '@/entities'

export type Repository = (query: string) => Promise<Restaurant[]>
