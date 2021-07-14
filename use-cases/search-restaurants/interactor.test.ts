import { interactor } from './interactor'

describe('Search Restaurants - Interactor', () => {
  it('calls repository with specified query', async () => {
    const repository = jest.fn()
    const searchRestaurants = interactor(repository)
    const query = 'outback'

    await searchRestaurants(query)

    expect(repository).toHaveBeenCalledWith(query)
  })
})
