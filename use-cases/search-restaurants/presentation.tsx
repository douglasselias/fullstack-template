import { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'

import { Input } from '@/components'

import { UseCase } from './usecase'

export function Presentation(props: Props) {
  const [query, setQuery] = useState('')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    async function searchRestaurants() {
      setRestaurants(await props.useCase(query))
    }

    searchRestaurants()
  }, [query])

  return (
    <VStack spacing={4} maxWidth="40rem">
      <Input label="Pesquisar" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {restaurants.map((r) => (
          <li key={r.name}>{r.name}</li>
        ))}
      </ul>
    </VStack>
  )
}

type Props = {
  useCase: UseCase
}

type Restaurant = {
  imageURL: string
  name: string
  category: string
  rating: number
  distance: number
  deliveryTimeRange: [number, number]
  deliveryTax: number
}
