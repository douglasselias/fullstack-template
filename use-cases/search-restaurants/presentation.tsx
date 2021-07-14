import { useEffect, useState } from 'react'
import Link from 'next/link'
import { VStack, HStack } from '@chakra-ui/react'

import { Restaurant } from '@/entities'
import { Input, StarIcon } from '@/components'

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
    <VStack spacing={4} maxWidth="40rem" alignItems="flex-start">
      <Input label="Pesquisar" onChange={(e) => setQuery(e.target.value)} />
      {restaurants.map((r) => (
        <Link href={'/list-products/' + r.id} key={r.id}>
          <HStack justifyContent="flex-start">
            <img
              src={r.imageURL}
              width="85px"
              style={{ borderRadius: '50%' }}
            />
            <div style={{ paddingLeft: '5px' }}>
              <span>{r.name}</span>
              <br />
              <div style={{ display: 'flex', gap: '7px' }}>
                <span
                  style={{
                    color: '#e7a74e',
                    fontWeight: 'bold',
                    display: 'flex',
                    gap: '5px',
                  }}
                >
                  <StarIcon />
                  {r.rating}
                </span>
                <span> • </span>
                <span>{r.category}</span>
                <span> • </span>
                <span>{r.distance} Km</span>
              </div>
              <span>
                {r.deliveryTimeRange[0]} - {r.deliveryTimeRange[1]} min
              </span>
              <span> • </span>
              <span>R$ {r.deliveryTax}</span>
            </div>
          </HStack>
        </Link>
      ))}
    </VStack>
  )
}

type Props = {
  useCase: UseCase
}
