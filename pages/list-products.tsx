import { Presentation } from '@/use-cases/list-products/presentation'
import { interactor } from '@/use-cases/list-products/interactor'
import { storage } from '@/use-cases/list-products/localstorage'

function Index() {
  return (
    <>
      <Presentation restaurantID="123-abc" useCase={interactor(storage)} />
    </>
  )
}

export default Index
