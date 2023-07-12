import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, Search } from '@material-ui/icons'
import { Badge } from "@material-ui/core"
import {mobile} from '../responsive'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'


const Container = styled.div`
  height : 60px;
  ${mobile({height:"35px"})};
`

const Wrapper = styled.div`
  padding : 10px 20px;
  display : flex;
  align-items : center;
  justify-content : space-between; 
  ${mobile({padding:"10px 0px"})};

`
const Left = styled.div`
  flex:1;
  display : flex;
  align-items : center;
`

const Language = styled.span`
  font-size : 14px;
  cursor : pointer;
  ${mobile({display:"none"})};
  
`

const SearchContainer = styled.div`
  border : 0.5px solid lightgrey;
  display : flex;
  align-items : center;
  margin-left : 25px;
  padding : 5px;
  ${mobile({padding:"3px",marginLeft:"6px",marginRight:"6px"})};
`

const Input = styled.input`
  border : none;
  ${mobile({width:"50px"})};
`

const Center = styled.div`
  flex:1;
  text-align : center;
`
const Logo = styled.h1`
  font-size: 50px;
  font-weight : bold;
  ${mobile({fontSize:"30px",marginRight:"1px",marginLeft:"4px"})};
`

const Right = styled.div`
  flex:1;
  display : flex;
  justify-content : flex-end;
  align-items: center;
  ${mobile({justifyContent:"center"})};
  
`
const MenuItem = styled.div`
  font-size : 14px;
  cursor : pointer;
  margin : 25px;
  ${mobile({fontSize:"12px",margin:"10px"})};
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  
  return (
    <Container>
       <Wrapper>
         <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{color : "gray", fontsize : 16 }} />
          </SearchContainer>
         </Left>
         <Center><Logo>ShopHop</Logo></Center>
         <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <Link to="/cart" >
          <MenuItem>
          <Badge badgeContent={quantity} color="primary" >
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
          </Link>
         </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar