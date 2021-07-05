export function storage(restaurantID: string) {
  const products = localStorage.getItem('ALL_PRODUCTS')
  if (!products) return []
  const parsedProducts = JSON.parse(products)
  return parsedProducts[restaurantID]
}
