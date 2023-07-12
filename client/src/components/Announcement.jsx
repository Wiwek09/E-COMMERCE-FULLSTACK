import styled from 'styled-components'


const Container = styled.div`
  height : 30px;
  background-Color : teal;
  color : white;
  display : flex;
  align-items : center;
  justify-content : center;
  font-size : 16px;
  font-weight : 10px; 
`

export const Announcement = () => {
  return (
    <Container>
       Special Offer At The Dashain
    </Container>
  )
}
