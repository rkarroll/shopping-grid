import { useContext, useMemo, ComponentType } from 'react'
import { Grid } from '@chakra-ui/react'
import Cart from 'components/Cart'
import { ShoppingContext } from 'context/ShoppingProvider'

export const withCart = (WrappedComponent: ComponentType) => {
  const Component = (props: any) => {
    const { shoppingCart } = useContext<any>(ShoppingContext)
    const [ shoppingCartVisibility, ] = shoppingCart

    const propsWithCartProps = useMemo(() => ({
      ...props,
      shoppingCartVisibility
    }), [props, shoppingCartVisibility]);

    return (
      <Grid gridTemplateColumns={shoppingCartVisibility ? "auto 372px" : "auto"} height="100vh" width="100vw" >
        <WrappedComponent {...propsWithCartProps} />
        {shoppingCartVisibility && <Cart />}
      </Grid>
    )
  }
  Component.displayName = 'withCart'
  return Component
}
