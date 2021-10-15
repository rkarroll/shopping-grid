import axios from 'axios'
import { ApiResponse } from 'types/productAndCategoriesApiTypes'

export const retrieveProductsAndCategoriesApi = (() => {
  const apiUrl = 'http://localhost:3000/api/products'

  return async (): Promise<ApiResponse> => {
    try {
      const productsResponse: { status: number, data: { products: any[], categories: string[] }} = await axios.get(`${apiUrl}`)

      if (productsResponse.status === 200 && productsResponse.data) {
        return { status: productsResponse.status, products: productsResponse.data.products, categories: productsResponse.data.categories }
      } else {
        return { status: productsResponse.status, products: null, categories: null }
      }
    } catch (error) {
      throw new Error('Error')
    }
  }
})()