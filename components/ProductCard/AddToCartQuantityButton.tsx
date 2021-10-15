import { FC } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { OperationTypes } from 'context/ShoppingProvider'
import PlusOrMinusButton from 'components/PlusOrMinusButton'

interface AddToCartQuantityButtonProps {
  inCart: boolean
  addOrRemoveProducts: (productId: string, operation: OperationTypes) => void
  productId: string
  quantityInCart: number
}

const AddToCartQuantityButton: FC<AddToCartQuantityButtonProps> = ({ inCart, addOrRemoveProducts, productId, quantityInCart }) => {
  return (
    <Flex 
      width="100%"
      height="36px"
      minHeight="36px"
      border={`1px solid ${inCart ? '#38C2DE' : '#AEAEAE'}`}
      fontSize="12px"
      color={inCart ? "#fff": "#38C2DE"}
      background={inCart ? "#38C2DE" : "#fff"}
      marginTop="14px"
      justify="center"
      align="center"
      cursor="pointer"
    >
      {!quantityInCart && (
        <Flex justify="center" align="center" width="100%" height="100%" onClick={() => addOrRemoveProducts(productId, OperationTypes.ADD)}>
          <PlusOrMinusButton background="white" border="1px solid #38C2DE">+</PlusOrMinusButton> 
          <Box>Add to Cart</Box>
        </Flex>
      )}
      {!!quantityInCart && (
        <Flex direction="row" align="center" justify="center" width="100%" height="100%">
          <PlusOrMinusButton background="white" color="#38C2DE" onClick={() => addOrRemoveProducts(productId, OperationTypes.SUBTRACT)}>-</PlusOrMinusButton>
          <Box marginLeft="5px" marginRight="5px" fontweight={900}>{quantityInCart}</Box>
          <PlusOrMinusButton background="white" color="#38C2DE" onClick={() => addOrRemoveProducts(productId, OperationTypes.ADD)}>+</PlusOrMinusButton>
        </Flex>
      )}
    </Flex>
  )
}

export default AddToCartQuantityButton