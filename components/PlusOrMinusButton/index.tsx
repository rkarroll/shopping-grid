import { Flex } from '@chakra-ui/react'

const PlusOrMinusButton = (props: any) => {
  return (
    <Flex justify="center" align="center" borderRadius="100%" width="17px" height="17px" marginLeft="5px" marginRight="5px" {...props}>
      {props.children}
    </Flex>
  )
}

export default PlusOrMinusButton