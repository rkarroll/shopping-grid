import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import ShoppingProvider from 'context/ShoppingProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ShoppingProvider>
        <Component {...pageProps} />
      </ShoppingProvider>
    </ChakraProvider>
  )
}
export default MyApp
