import { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'

import { Product } from '@/entities'

import { UseCase } from './usecase'

export function Presentation(props: Props) {
  const { useCase, restaurantID } = props
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function listProducts() {
      setProducts(await useCase(restaurantID))
    }

    listProducts()
  }, [restaurantID])

  return (
    <>
      <VStack>
        {products.map((p) => (
          <div key={p.id} style={{ display: 'flex', paddingTop: '30px' }}>
            <VStack>
              <b>{p.name}</b>
              <br />
              <span style={{ maxWidth: '200px' }}>{p.description}</span>
              <span style={{ color: '#50a773', fontWeight: 'bold' }}>
                R$ {p.price}
              </span>
            </VStack>
            <img
              src={p.photoURL}
              width="170px"
              height="170px"
              style={{
                borderRadius: '5%',
                objectFit: 'cover',
                height: '170px',
                marginLeft: '20px',
              }}
            />
          </div>
        ))}
      </VStack>
    </>
  )
}

type Props = {
  useCase: UseCase
  restaurantID: string
}
