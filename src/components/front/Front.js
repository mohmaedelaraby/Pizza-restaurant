import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import front from '../../images/pizza-3.jpg'
import SideBarToggle from '../sidebar/SideBarToggle'


const Container = styled.div`
    height: 111vh;
    background-position: center;
    background-size: cover;
    object-fit: contain;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${front});
`

const FrontContient =styled.div`
    height: calc(100vh-80px);
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((100vw-1300px)/2);
    
`
const Items =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 700px;
    text-transform: uppercase;
    color: #fff;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;      
    }

`

const H1 = styled.h1`
    font-size: clamp(2.5rem ,10vw,5rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
    box-shadow: 3px 5px #e9ba23;
`

const P1 = styled.p`
    font-size: clamp(2rem ,2.5vw,3rem);
    margin-bottom: 2rem;
`

const Btn = styled.button`
    font-size: 1.5rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        transition: 0.2s ease-out;
        background: #ffc500;
        cursor: pointer;
    }

`

function Front() {
    const [isOpen , setIsOpen] = useState(false)
    const Toggel =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Container>
         <Navbar toggle={Toggel}/>
         <SideBarToggle isOpen={isOpen} toggle={Toggel}/>
            <FrontContient>
                <Items>   
                    <H1>Best Pizza in EGYPT</H1>
                    <P1>Ready in 45 min</P1>
                    <Btn> ORDER NOW</Btn>
                </Items>
            </FrontContient>
        </Container>            
        </>
    )
}

export default Front
