import { useContext, useState, ComponentType } from 'react'
import { Flex, Box } from '@chakra-ui/react'
// import Logo from 'components/Logo'
import { useRouter } from 'next/router'
import SearchInput from 'components/SearchInput'
import { useCallback } from 'react'
import { Recipes, Shop, Profile, Settings, ShoppingCart } from 'components/Icons'
import { IconProps } from 'types/headerTypes'
import { ShoppingContext } from 'context/ShoppingProvider'

enum Actions {
  RECEIPES = 'recipes',
  SHOP = 'shop',
  PROFILE = 'profile',
  SETTINGS = 'settings',
  SHOPPING_CART = 'cart'
}

const headerActions = [
  { action: Actions.RECEIPES, icon: () => <Recipes />, width: '22px', height: '20px' },
  { action: Actions.SHOP, icon: () => <Shop />, width: '23px', height: '21px' },
  { action: Actions.PROFILE, icon: (props: IconProps) => <Profile {...props} />, width: '22px', height: '22px' },
  { action: Actions.SETTINGS, icon: () => <Settings />, width: '24px', height: '20px' },
  { action: Actions.SHOPPING_CART, icon: () => <ShoppingCart />, width: '24px', height: '24px' },
]

interface headerActionType {
  action: Actions
  icon: ComponentType
}

const Header = () => {
  const { shoppingCart } = useContext<any>(ShoppingContext)
  const [ shoppingCartVisibility, setShoppingCartVisibility ] = shoppingCart

  const [activeAction, setActiveAction] = useState<Actions | null>(null)
  
  const router = useRouter()

  const headerAction = useCallback((action) => {
    if (action === Actions.SHOPPING_CART) {
      setShoppingCartVisibility(true)
      return
    }
    router.push(`/${action}`)
  }, [router, setShoppingCartVisibility])

  return (
    <Flex direction="row" justify="space-between" align="center" padding="0px 23px" borderBottom="1px solid rgba(215, 215, 215, 0.5)">
      <Flex width="126px" flexGrow={0}>
        {/* <Logo /> */}
      </Flex>
      <Flex flexGrow={1}>
        <SearchInput />
      </Flex>
      <Flex direction="row" width="400px" flexGrow={0} padding="4px 0px" height="40px" justify="flex-end">
        <Flex align="center" borderRadius="5px" padding="0px 10px" background="#EC6661" cursor="pointer" transition="all 0.3s ease-in-out" color="#fff" marginRight="23px" _hover={{ background: '#d4716d' }}>
          Get $20 Off
        </Flex>
        <Flex direction="row">
          {headerActions.map((action: any) => {
            const ActionComponent = action.icon
            if (shoppingCartVisibility && action.action === Actions.SHOPPING_CART) {
              return <></>
            }

            return (
              <Flex
                direction="column"
                justify="space-between"
                align="center"
                key={`headerAction_${action.action}`}
                width="37px"
                height="40px"
                marginLeft="8.5px"
                marginRight="8.5px"
                transition="all 0.3s ease-in-out"
                color={activeAction === action.action ? "#333" : "#777"}
                cursor="pointer"
                fontWeight={400}
                fontSize="0.7rem"
                _hover={{ 
                  color: '#333'
                }}
                onClick={() => headerAction(action.action)}
              > 
                <Box width={action.width} height={action.height} minWidth={action.width} minHeight={action.height}>
                  <ActionComponent />
                </Box>
                <Box fontFamily="" textTransform="capitalize">{action.action}</Box>
              </Flex>
            )}
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header