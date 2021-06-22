export class Restaurant {
  imageURL: string
  name: string
  category: string
  rating: number
  distance: number
  deliveryTimeRange: [number, number]
  deliveryTax: number

  validateName() {
    return this.name.length < 3
  }

  validateRating() {
    return this.rating >= 0 && this.rating <= 5
  }

  validateDistance() {
    return this.distance < 0
  }

  validateTimeRange() {
    const [start, end] = this.deliveryTimeRange
    return start > end
  }

  validateTax() {
    return this.deliveryTax < 0
  }

  validateSelf() {
    return (
      this.validateRating() &&
      this.validateDistance() &&
      this.validateTimeRange() &&
      this.validateTax()
    )
  }
}
