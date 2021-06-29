import { Repository } from './repository'
import { Props as UseCaseProps } from './usecase'

export function interactor({ repository, gateway }: Props) {
  return (props: UseCaseProps) => {
    const paymentSuccessfull = gateway.makePayment()

    return paymentSuccessfull ? repository(props) : 'Erro no pagamento'
  }
}

type Gateway = {
  makePayment(): boolean
}

type Props = {
  repository: Repository
  gateway: Gateway
}

// type PaymentError = string
