import React from "react"
import styled from "styled-components"
import {ArrowLeftOutlined,ArrowRightOutlined} from  '@material-ui/icons'
import {sliderItems} from '../data'
import { useState } from "react"
import {mobile} from '../responsive'



const Container = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
  position: relative;
  overflow: hidden;
  padding: 20px 0px;
  ${mobile({display:"none"})};
`

const Arrow = styled.div`
  width : 50px;
  height : 50px;
  background-color:#c6cfd8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0%;
  bottom: 0%;
  margin: auto;
  left : ${props=> props.direction === 'left' && '10px' };
  right : ${props=> props.direction === 'right' && '10px' };
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${props=>(props.slideIndex) * -100}vw);
  transition: all 1.3s ease ;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 0px 0px;
  
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 60px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 2px;
`
const Button = styled.button`
  padding: 10px;
  border-color:darkorange;
  font-size: 15px;
  cursor: pointer;
`


const Slider = () => {

  const [slideIndex,setSlideIndex] =useState(0);
  const handleClick = (direction) =>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0  )
    }
    
  };
  return (
    <Container>
      <Arrow direction = 'left' onClick={() =>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex} >
        {sliderItems.map(item=>
            (<Slide bg= {item.bg} key={item.id} >
            <ImgContainer>
              <Image src = {item.img}  alt="Image of Clothes" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide >  
          ))}
      </Wrapper>
      <Arrow direction = 'right' onClick={() =>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider