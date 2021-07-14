import { http } from './http'

describe('Search Restaurants - HTTP', () => {
  it('returns all restaurants', async () => {
    const query = ''
    const result = await http(query)

    expect(result).toEqual([
      {
        id: 'outback',
        imageURL:
          'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/e88fbe01-dd08-413e-9895-57f9b41ccc5f/202008101207_dlhn_i.png',
        name: 'Outback',
        category: 'Australiana',
        rating: 5,
        distance: 1.2,
        deliveryTimeRange: [35, 40],
        deliveryTax: 5,
      },
      {
        id: 'casa-do-yakisoba',
        imageURL:
          'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/592d7198-02da-4f1b-bd1e-75e88d8bb7e7/202004201616_B6kW_i.png',
        name: 'Casa do Yakisoba',
        category: 'Japonesa',
        rating: 5,
        distance: 5,
        deliveryTimeRange: [20, 30],
        deliveryTax: 13,
      },
      {
        id: 'mcdonalds',
        imageURL:
          'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201812261755_9aab5a2a-f4e9-40e4-a3c2-379e7203b50f.png',
        name: "McDonald's",
        category: 'Lanches',
        rating: 4.1,
        distance: 10,
        deliveryTimeRange: [25, 35],
        deliveryTax: 7,
      },
    ])
  })

  it('returns one restaurant', async () => {
    const query = 'outback'
    const result = await http(query)

    expect(result).toEqual([
      {
        id: 'outback',
        imageURL:
          'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/e88fbe01-dd08-413e-9895-57f9b41ccc5f/202008101207_dlhn_i.png',
        name: 'Outback',
        category: 'Australiana',
        rating: 5,
        distance: 1.2,
        deliveryTimeRange: [35, 40],
        deliveryTax: 5,
      },
    ])
  })
})
