import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

interface ProductImageProps {
  imageUrl?: string
}

// Using the image as a background so that I can theoretically add text over it easily when out of stock or in your chart
const ProductImage: FC<ProductImageProps> = ({ imageUrl }) => {
  return (
    <Flex 
      width="200px" 
      height="154px" 
      background={`url('${imageUrl}')`}
      backgroundPosition="center center"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"  
      justify="center"
      align="center"
    />
  )
}

export default ProductImage