import { useEffect, useState } from 'react'

import { Product } from '@/entities/product'

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
      <ul>
        {products.map((r) => (
          <li key={r.name}>{r.name}</li>
        ))}
      </ul>
    </>
  )
}

type Props = {
  useCase: UseCase
  restaurantID: string
}
