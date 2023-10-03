import React from 'react'
import { getProduct } from "../../../utils/getProduct";
import { Typography,Container } from '@mui/material';
type Params = {
  params: {
    id:string
  }
}
type Product = {
    id:string,
    name:string,
    price:number,
    stock:number
}
export default async function productId({params}:Params) {
  const product:Product[] = await getProduct(params.id) as Product[]
  return (
    <Container>
      <Typography>{product[0].name}/{product[0].stock} left</Typography>
      <Typography>price: {product[0].price}€</Typography>
    </Container>
  )
}
