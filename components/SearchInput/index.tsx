import { Flex, InputGroup, Input, InputRightElement  } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = () => {
  return (
    <InputGroup maxWidth="497px" width="100%" minWidth="100px" height="39px" cursor="pointer" marginLeft="24px">
      <Input maxWidth="497px" width="100%" minWidth="100px" height="39px" type="tel" placeholder="Phone number" border="1px solid rgba(215, 215, 215, 0.5)" borderRadius="2px" />
      <InputRightElement
        pointerEvents="none"
      >
        <Flex justify="center" align="center" width="40px" height="39px">
          <SearchIcon color="#777" />
        </Flex>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchInput