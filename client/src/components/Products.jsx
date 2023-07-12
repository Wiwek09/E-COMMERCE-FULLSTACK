import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`


const Products = ({cat,filters,sort}) => {
  const [product,setProduct] = useState([])
  const [filteredproduct,setFilteredProduct] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(
          cat 
            ? `http://localhost:5000/api/products?category=${cat}` 
            : `http://localhost:5000/api/products`
          );
          setProduct(res.data);
      }
      catch(err){
         
      }
    }
    getProducts();
  },[cat]);

  useEffect(()=>{
   cat && setFilteredProduct(
    product.filter((item) => 
      Object.entries(filters).every(([key,value]) =>
      item[key].includes(value)
      )
    )
   );
  },[cat,product,filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProduct((prev) =>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      )
    }
    else if(sort === "asc"){
      setFilteredProduct((prev) =>
      [...prev].sort((a,b)=> a.price - b.price)
      )
    }
    else{
      setFilteredProduct((prev) =>
      [...prev].sort((a,b)=> b.price - a.price)
      )
    }
  },[sort])

  return (
    <Container>
       {cat ? filteredproduct.map(item=> (
        <Product item={item} key={item.id}/>
       )) 
       : product
       .slice(0,8)
       .map(item=> (<Product item={item} key={item.id}/>
       ))}
    </Container>
  )
}

export default Products