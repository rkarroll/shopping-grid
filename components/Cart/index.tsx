import { useContext } from 'react'
import { Grid, Flex, Box } from '@chakra-ui/react'
import { ShoppingCart, RightArrow } from 'components/Icons'
import { ShoppingContext } from 'context/ShoppingProvider'

const Cart = () => {
  const { shoppingCart } = useContext<any>(ShoppingContext)
    const [ , setShoppingCartVisibility ] = shoppingCart

  return (
    <Grid gridTemplateRows="32px auto" paddingLeft="21px" paddingRight="21px" borderLeft="1px solid rgba(215, 215, 215, 0.5)">
      <Flex direction="row" justify="space-between" align="center" height="55px">
        <Flex justify="center" align="center" color="#02A0F2" width="18px" height="14px" cursor="pointer" onClick={() => setShoppingCartVisibility(false)}><RightArrow /></Flex>
        <Box fontWeight={600}>Your Cart</Box>
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          width="37px"
          marginLeft="8.5px"
          marginRight="8.5px"
          transition="all 0.3s ease-in-out"
          color="#333"
          fontWeight={400}
          fontSize="0.7rem"
          _hover={{ 
            color: '#333'
          }}
        > 
          <Box width="24px" height="24px" marginTop="4px">
            <ShoppingCart />
          </Box>
          <Box textTransform="capitalize">Cart</Box>
        </Flex>
      </Flex>
      <Box marginTop="40px" background="#F5F2EA" />
    </Grid>
  )
}

export default Cart