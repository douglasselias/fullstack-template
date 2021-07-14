import { useEffect, useState } from 'react'
import Link from 'next/link'
import { VStack, HStack } from '@chakra-ui/react'

import { Restaurant } from '@/entities'
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

function StarIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      fill="#e7a74e"
      style={{ marginTop: '3px' }}
    >
      <path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path>
    </svg>
  )
}

type Props = {
  useCase: UseCase
}
