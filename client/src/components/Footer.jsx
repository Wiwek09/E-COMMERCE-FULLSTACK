import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from '../responsive'


const Container = styled.div`
 display: flex;
 ${mobile({flexDirection:"column"})};
`

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
  font-weight: 100px;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height:40px;
  border-radius: 50%;
  color:white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20pX;
  cursor: pointer;

`

const Center = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({display:"none"})};
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover{
  color:#021691;
  font-weight:800;
  }
`

const Right = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({backgroundColor:"#eae0e0"})};
`
const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
`

const Payment = styled.img`
  width:50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ShopHop</Logo>
            <Desc> There are many variations of passages of Lorem Ipsum available, but 
              the majority have suffered alteration in some form, by injected
             humour, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                  <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                  <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                  <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                  <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Ranipauwa-11,Gandaki,Pokhara,Nepal</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+061-588107  ; +9856025370</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>wastedman01@gmail.com</ContactItem>
            <Payment src ="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer

