export interface ApiResponseNotFound {
  status: 'error'
}

export interface ApiResponseSuccess {
  status: number
  products: any[] | null
  categories: string[] | null
}

export type ApiResponse = ApiResponseNotFound | ApiResponseSuccess

export interface PartialProductProps {
  productId: {
    value: string
  }
  imageUrl: string
  brand: string
  name: string
  quantity: string
  pricePerQuantity: string
  price: number
}