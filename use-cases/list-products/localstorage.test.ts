import { storage } from './localstorage'

const stubProduct = {
  name: 'Batata frita',
  price: 12,
}

describe('List products - Local Storage', () => {
  it('returns a list of products', () => {
    localStorage.setItem(
      'ALL_PRODUCTS',
      JSON.stringify({
        '123-abc': [stubProduct],
      })
    )

    const products = storage('123-abc')
    expect(products).toStrictEqual([stubProduct])
  })

  it('returns an empty list', () => {
    localStorage.clear()
    const products = storage('123-abc')
    expect(products).toStrictEqual([])
  })
})
