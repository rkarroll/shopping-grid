import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import ProductImage from './ProductImage'
import Brand from './BrandText'
import ProductName from './ProductName'
import Quantity from './Quantity'
import Price from './Price'
import AddToCartQuantityButton from './AddToCartQuantityButton'
import { PartialProductProps } from 'types/productAndCategoriesApiTypes'
import { OperationTypes } from 'context/ShoppingProvider'

interface ProductCardProps extends PartialProductProps {
  inCart: boolean
  addOrRemoveProducts: (productId: string, operation: OperationTypes) => void
  quantityInCart: number
}

const ProductCard: FC<Partial<ProductCardProps>> = ({ imageUrl, brand, name, quantity, pricePerQuantity, price, productId, inCart, addOrRemoveProducts, quantityInCart }) => {
  const modOfPrice = price ? `${price % 100}` : `00`
  const formattedPrice = price ? `$${Math.floor(price/100)}.${modOfPrice.length === 2 ? modOfPrice : `0${modOfPrice}`}` : '$0.00'

  return (
    <Flex direction="column" justify="space-between" align="center" boxShadow={inCart ? "0px 0px 4px 2px rgba(0, 0, 0, 0.07)" : "" }>
      <ProductImage imageUrl={imageUrl} />
      <Brand brandName={brand} />
      <ProductName productName={name} />
      <Quantity quantity={quantity} pricePerQuantity={pricePerQuantity} />
      <Price price={formattedPrice} />
      <AddToCartQuantityButton inCart={inCart!} addOrRemoveProducts={addOrRemoveProducts!} productId={productId!.value} quantityInCart={quantityInCart!} />
    </Flex>
  )
}

export default ProductCard