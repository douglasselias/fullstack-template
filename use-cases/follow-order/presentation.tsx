import { useEffect, useState } from 'react'

import { OrderStatus, UseCase } from './usecase'

export function Presentation(props: Props) {
  const { useCase, orderID } = props
  const [order, setOrder] = useState<OrderStatus>({
    deliveryForecast: '',
    status: 'UNKNOWN',
  })

  useEffect(() => {
    async function getOrder() {
      setOrder(await useCase(orderID))
    }

    getOrder()
  }, [orderID])

  return (
    <>
      <h2>Horário aproximado de chegada: {order.deliveryForecast}</h2>
      <p>Status: {order.status}</p>
    </>
  )
}

type Props = {
  useCase: UseCase
  orderID: number
}
