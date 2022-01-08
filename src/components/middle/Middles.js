import React from 'react'
import styled from 'styled-components'
import FeaturePic from '../../images/featured3.jpg'
const Container = styled.div`
     background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }

  &:hover{
      color: #ffc500;
      font-weight: 600;
      transition: 0.2s ease-in-out;
      cursor: pointer;
  }
`

const Btn = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;
&:hover {
  color: #fff;
  background: #e31837;
  transition: 0.2s ease-out;
  cursor: pointer;
}
`
function Middles() {
    return (
        <Container>
            <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Btn>ORDER NOW</Btn>
            
        </Container>
    )
}

export default Middles
