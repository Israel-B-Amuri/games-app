import React from 'react'
import { getProducts } from '@/utils/getProducts'
import { Container, Typography, Link } from '@mui/material'

type Product = {
    id:number,
    name:string,
    price:number,
    stock:number
}

export default async function products() {
  const products : Product[] = await getProducts() as Product[]
  
  return (
    <Container>
      <div>products</div>
      {products.map(product => ( 
        <Link key={`${product.name} + ${product.id}`} href={`/products/${product.id}`}>
          <Container>
          {product.name}
          </Container>            
        </Link>
      ))}
    </Container>
  ) 
}