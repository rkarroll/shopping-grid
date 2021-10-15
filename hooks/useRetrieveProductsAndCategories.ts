import { useMemo, useState, useCallback } from 'react'
import { retrieveProductsAndCategoriesApi } from 'api/retrieveProductsAndCategoriesApi'

const useRetrieveProductsAndCategories = (selectedCategories: string[]) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<any[] | null>(null)
  const [categories, setCategories] = useState<string[] | null>(null)

  const retrieveProductsAndCategories = useCallback(async () => {
    setLoading(true)
    let productsFromApi: any[] | null = []
    let categoriesApi: string[] | null = []   
    const apiResponse = await retrieveProductsAndCategoriesApi()
      if (apiResponse.status === 200) {
        productsFromApi = apiResponse.products
        categoriesApi = apiResponse.categories
      } 
  
    setLoading(false)  
    if (apiResponse.status !== 200) {
      setError(true)
      return
    }

    setProducts(productsFromApi)
    setCategories(categoriesApi)
  }, [setLoading, setError, setProducts, setCategories])

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length > 0) {
      return products?.filter(product => selectedCategories.includes(product.category))
    }
    return products
  }, [products, selectedCategories])

  return {
    loading,
    error,
    filteredProducts,
    categories,
    retrieveProductsAndCategories,
  }
}

export default useRetrieveProductsAndCategories