import { FC } from 'react'
import { Box } from '@chakra-ui/react'

interface PriceProps {
  price?: string
}

const Price: FC<PriceProps> = ({ price }) => {
  return (
    <Box 
      width="100%"
      fontSize="14px"
      color="#000"
      marginTop="11px"
      fontWeight={600}
      textAlign="center"
    >
      {price}
    </Box>
  )
}

export default Price