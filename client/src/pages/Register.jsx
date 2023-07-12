import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.2)),
   url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
   center ;

  display: flex;
  align-items: center;
  justify-content: center;
  
`

const Wrapper = styled.div`
  width:40%;
  padding: 20px;
  background-color:#dab2d0;
  ${mobile({width:"75%"})};
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.span`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Aggrement = styled.span`
  font-size: 18px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Aggrement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Aggrement>
            </Form>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
  )
}

export default Register