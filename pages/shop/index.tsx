import { useLayoutEffect, useContext } from 'react'
import { Box, Grid, Flex } from '@chakra-ui/react'
import { withCart } from 'higherOrderComponents/withCart'
import Header from 'components/Header'
import Tags from 'components/Tags'
import ProductCard from 'components/ProductCard'
import useRetrieveProducts from 'hooks/useRetrieveProductsAndCategories'
import { PartialProductProps } from 'types/productAndCategoriesApiTypes'
import { ShoppingContext } from 'context/ShoppingProvider'

const pagePaddingValues = ['20px', '20px', '40px', '100px']
const gridGapValues = ['10px', '10px', '23px']

const Shop = (props: any) => {
  const { tags, shoppingCartProducts } = useContext<any>(ShoppingContext)
  const [ selectedTags, ] = tags
  const [ shoppingCartItems, addOrRemoveProducts ] = shoppingCartProducts
  
  const { loading, error, filteredProducts, categories, retrieveProductsAndCategories, } = useRetrieveProducts(selectedTags)

  useLayoutEffect(() => {
    retrieveProductsAndCategories()
  }, [retrieveProductsAndCategories])

  return (
    <Grid gridTemplateRows="59.5px auto">
      <Header />
      <Flex width="100%" direction="column" justify="flex-start" align="center" paddingTop="26.9px" paddingLeft={pagePaddingValues} paddingRight={pagePaddingValues} >
        <Box color="#111" width="100%" fontSize="12px" fontWeight={600}>
          Shop by category: 
        </Box>
        {categories && <Tags categories={categories} />}
        {filteredProducts && 
          <Grid 
            width="100%"
            paddingTop="49px"
            gridGap={gridGapValues}
            templateColumns="repeat(auto-fill, 200px)"
            gridAutoRows="284px"
            marginBottom="40px"
            justifyContent="centr"
          >
            {filteredProducts.map((product: PartialProductProps) => {
              let inCart = false
              let quantityInCart = 0
              if(shoppingCartItems.has(product.productId.value)) {
                inCart = true
                quantityInCart = shoppingCartItems.get(product.productId.value)
              }

              return <ProductCard 
                key={product.productId.value} 
                imageUrl={product.imageUrl}
                brand={product.brand}
                name={product.name}
                quantity={"12"}
                pricePerQuantity={"$0.50/oz"}
                price={product.price}
                // wanted to share props from api data and product card which is why this is passing an object
                productId={{ value: product.productId.value }}
                inCart={inCart}
                addOrRemoveProducts={addOrRemoveProducts}
                quantityInCart={quantityInCart}
              />
            })}
          </Grid>
        }
      </Flex>
    </Grid>
  )
}

export default withCart(Shop)