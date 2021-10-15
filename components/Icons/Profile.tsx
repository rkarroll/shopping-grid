// hard coding a profil picture in here due to the deadline but, otherwise making the component work as it should
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { IconProps } from 'types/headerTypes'

export const Profile: FC<IconProps> = ({ active }) => {
  return (
    <Box
      borderRadius="100%"
      height="100%"
      width="100%"
      border={`2px solid ${active ? '#333' : '#777'}`}
      background="url('https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2019_47/3112746/191121-baby-yoda-cs-959a.jpg')"
      backgroundPosition="center center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"  
      transition="all 0.3s ease-in-out"
      _hover={{
        borderColor: '#333'
      }}
      position="relative"
    >
      <Box position="absolute" width="8px" height="8px" borderRadius="100%" zIndex="1" background="#EC6661" right="-8px" top="-7px" />
    </Box>
  )
}