import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/shop')
  }, [router])
  return (
    <div>Home</div>
  )
}

export default Home
