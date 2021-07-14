import { useRouter } from 'next/router'

import { Presentation, interactor, http } from '@/use-cases/list-products'

function ListProducts() {
  const router = useRouter()
  const restaurantID = router.asPath.replace('/list-products/', '')

  return <Presentation restaurantID={restaurantID} useCase={interactor(http)} />
}

export default ListProducts
