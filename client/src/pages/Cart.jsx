import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from '../responsive'
import { useSelector } from "react-redux"
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from "react"

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``

const SetMargin = styled.div`
  margin-bottom: 15px;
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})};
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 30px;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ?"black" : "transparent" };
  color: ${props=>props.type === "filled" && "white" };
`
const TopTexts = styled.div`
  ${mobile({display:"none"})};
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-size: 20px;
    font-weight: 700;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})};
`

const Info = styled.span`
  flex:3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})};
`
const ProductDetail = styled.div`
 flex:2;
 display: flex;
 
`
const Image = styled.img`
  width: 200px;

`

const Details = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.h3`
  font-size:20px;
`
const ProductId = styled.h4``
const ProductColor = styled.div`
  width:20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.h4``

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})};
`
const ProductPrices = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})};
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Hr = styled.hr`
  background-color: #eee;
  border:none;
  height: 1px;
`

const Summary = styled.span`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding:20px ;
  height:50vh;
  
`

const SummaryTitle = styled.h1`
  font-weight: 400;
`
const SummaryItem = styled.div`
  margin:30px 0px; 
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "600"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;

`

const Cart = () => {
 
  const cart = useSelector((state)=>state.cart)
  const [stripeToken,setStripeToken] = useState(null)

  const onToken = (token) =>{
    setStripeToken(token)
  }
  console.log(onToken)

  useEffect(()=>{
    const makeRequest = async () =>{
      
    }
  },[stripeToken])
  return (
    <Container>
    <SetMargin>
        <Navbar/>
    </SetMargin>
        <Announcement/>
        <Wrapper>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>Info
               { cart.products.map((product) => (
                  <Product>
                    <ProductDetail>
                       <Image src={product.img} />
                       <Details>
                          <ProductName><b>Product:</b> {product.title}</ProductName>
                          <ProductId><b>ID:</b> {product._id}</ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize><b>Size:</b> {product.size}</ProductSize>
                       </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrices>$ {product.price * product.quantity}</ProductPrices>
                    </PriceDetail>
                </Product>
                ))
                }
                <Hr/>         
                </Info>
                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.1</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shippping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -4.0</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <StripeCheckout 
                    name="Shop Hop"
                    image="https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581_960_720.png"
                    shippingAddress
                    billingAddress
                    description={`Your Total Amount is ${cart.total}`}
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <Button>CHEKOUT NOW</Button>
                  </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart