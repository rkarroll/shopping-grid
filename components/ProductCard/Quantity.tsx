import { FC } from 'react'
import { Flex, Box } from '@chakra-ui/react'

interface QuantityProps {
  quantity?: string
  pricePerQuantity?: string
}

const Quantity: FC<QuantityProps> = ({ quantity, pricePerQuantity }) => {
  return (
    <Flex 
      width="100%"
      fontSize="10px"
      color="#000"
      marginTop="9px"
      direction="row"
      justify="center"
    >
      <Box marginRight={pricePerQuantity ? "5px" : "0px"}>{quantity || ''}</Box>
      {pricePerQuantity && <Box marginLeft="5px" color="#777">{pricePerQuantity}</Box>}
    </Flex>
  )
}

export default Quantity