import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { categories } from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
 flex:1;
 margin: 4px;
 height: 70vh;
 position: relative;
`
const Image = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover ;
  ${mobile({height:"20vh"})};
`
const Info = styled.p`
  position: absolute;
  left: 0;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`
const Title = styled.h1`
  color:white;
  font-weight:bolder;
  margin-bottom: 15px;
  font: 60px;
  
`
const Button = styled.button`
  border:none ;
  font-size: medium;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 800
  ;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
     <Link to={`/products/${item.cat}`} >
      <Image src={item.img} />
      <Info>
         <Title>{item.title}</Title>
         <Button>SHOP NOW</Button>
      </Info>
     </Link>
    </Container>
  )
}

export default CategoryItem