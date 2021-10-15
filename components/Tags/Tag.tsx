import { ReactNode, FC } from 'react'
import { Flex } from '@chakra-ui/react'

interface TagProps {
  children: ReactNode
  selected: boolean
  addOrRemoveTags: (category: string) => void
}

const Tag: FC<TagProps> = ({ children, selected, addOrRemoveTags }) => {
  return (
    <Flex 
      justify="center" 
      align="center" 
      padding="10px 16px" 
      background={selected ? "#414141" : "#fff"} 
      color={selected ? "#fff" : "var(--chakra-colors-gray-900)"} 
      border="1px solid rgba(215, 215, 215, 0.5)" 
      borderRadius="35px" 
      height="31px" 
      fontSize="14px" 
      cursor="pointer"
      transition="all 0.3s ease-in-out"
      _hover={{
        background: '#000',
        color: '#fff'
      }}
      onClick={() => addOrRemoveTags(children as string)}
    >
      {children}
    </Flex>
  )
}

export default Tag