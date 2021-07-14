import { useToast } from '@chakra-ui/react'

import { PrimaryButton } from '@/components'
import { PaymentMethod, ProductOrder } from '@/entities'

import { UseCase } from './usecase'

export function Presentation(props: Props) {
  const toast = useToast()

  async function onClick() {
    const result = await props.useCase({
      paymentMethod: props.paymentMethod,
      products: props.products,
    })

    if (typeof result === 'number') {
      toast({
        title: 'Pedido realizado com sucesso!',
        description: 'Logo a comida chegará até você',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Erro no pedido',
        description: result,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return <PrimaryButton onClick={onClick} text="Fazer pedido" />
}

type Props = {
  useCase: UseCase
  paymentMethod: PaymentMethod
  products: ProductOrder[]
}
