// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs';
import path from 'path'

type Data = {
  products: any[]
  categories: string[]
}

// This does not have rate limiting on the FS reading which is a security concern since this is just a test
// I am leaving but would perform some sort of rate limiting in order to protect DDOS 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const productsFile = path.resolve('./public')
  const productsJSON = readFileSync(path.join(productsFile, 'products.json'), { encoding: 'utf8' })
  const products = JSON.parse(productsJSON)


  const categories = products.reduce((accumulator: string[], currentValue: any) => {
    if (!accumulator.includes(currentValue.category) && currentValue.category) {
      accumulator.push(currentValue.category)
    }
    return accumulator
  }, [])

  res.status(200).json({ products, categories })
}
