import React from 'react'
import { getProduct } from "../../../utils/getProduct";
import {Container } from '@mui/material';
import ProductCard from '../../components/ProductCard'
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
      {product.map(item =>
      <Container key={item.id}>
        <ProductCard id={item.id} name={item.name} price={item.price} stock={item.stock}/>
      </Container>
      )
       }
    </Container>
  )
}
