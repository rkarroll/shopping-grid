import { FC } from 'react'
import { Box } from '@chakra-ui/react'

interface BrandProps {
  brandName?: string
}

const Brand: FC<BrandProps> = ({ brandName }) => {
  return (
    <Box 
      width="100%"
      fontSize="10px"
      color="#000"
      marginTop="11px"
      textAlign="center"
    >
      {brandName || ''}
    </Box>
  )
}

export default Brand