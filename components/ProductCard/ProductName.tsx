import { FC } from 'react'
import { Box } from '@chakra-ui/react'

interface ProductNameProps {
  productName?: string
}

const ProductName: FC<ProductNameProps> = ({ productName }) => {
  return (
    <Box 
      width="100%"
      fontSize="14px"
      color="#000"
      marginTop="7px"
      textAlign="center"
    >
      {productName}
    </Box>
  )
}

export default ProductName