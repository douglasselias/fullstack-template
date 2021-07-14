import { Repository } from './repository'
import { Gateway } from './gateway'
import { Props as UseCaseProps } from './usecase'

export function interactor({ repository, gateway }: Props) {
  return (props: UseCaseProps) => {
    const paymentSuccessfull = gateway.makePayment(props.paymentMethod)

    return paymentSuccessfull ? repository(props) : 'Erro no pagamento'
  }
}

type Props = {
  repository: Repository
  gateway: Gateway
}

// type PaymentError = string
