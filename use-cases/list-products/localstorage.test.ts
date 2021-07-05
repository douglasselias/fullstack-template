import { storage } from './localstorage'

const stubProduct = {
  name: 'Batata frita',
  price: 12,
}

describe('List products - Local Storage', () => {
  localStorage.setItem(
    'ALL_PRODUCTS',
    JSON.stringify({
      '123-abc': [stubProduct],
    })
  )

  it('returns a list of products', () => {
    const products = storage('123-abc')
    expect(products).toStrictEqual([stubProduct])
  })
})
