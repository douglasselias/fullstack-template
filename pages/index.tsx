import { Presentation, interactor, http } from '@/use-cases/search-restaurants'

function Index() {
  return <Presentation useCase={interactor(http)} />
}

export default Index
