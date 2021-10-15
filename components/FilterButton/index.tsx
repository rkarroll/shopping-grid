import { Flex, Box } from '@chakra-ui/react'
import ListWithCheck from 'components/Icons/ListWithCheck'

const FilterButton = () => {
  return (
    <Flex 
      justify="center" 
      align="center" 
      width="31px" 
      height="31px" 
      color="#333" 
      border="1px solid rgba(215, 215, 215, 0.5)" 
      borderRadius="100%" 
      cursor="pointer"
      transition="all 0.3s ease-in-out"
      _hover={{
        background: '#000',
        color: '#fff'
      }}
    >
      <Box width="15px" height="10px">
        <ListWithCheck />
      </Box>
    </Flex>
  )
}

export default FilterButton