import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'



const Container = styled.aside`
    height: 100%;
    width: 350px;
    position: fixed;
    z-index: 999;
    background-color:#ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen})=>(isOpen? '0' : '-500px')};

    @media screen and (max-width: 400px){
        width: 100%;      
    }
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
    cursor: pointer;
`

const Icon=styled.div`
    top: 1.2rem;
    right: 1.5rem;
    position: absolute;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`

const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,80px);
    text-align: center;

    @media screen and (max-width: 400px){
        grid-template-rows: repeat(3,60px);
    }
`
const Links =styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor:pointer;
    color: #000;
    text-decoration: none;

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    cursor:pointer;
    }

`


const SideBtn =styled.div`
    display: flex;
    justify-content: center;
`

const SidebarRoute = styled(Link)`

    background-color: #e31837;
    cursor: pointer;
    font-size: 16px;
    border: none;
    white-space: nowrap;
    outline: none;
    color: #fff;
    padding: 16px 64px;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        color: #010606;
        transition: 0.2s ease-in-out;
    cursor:pointer;
    background: #fff;
    }



`

function SideBarToggle({isOpen,toggle}) {

    
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <Menu>
                <Links to='/pizzas'>Pizza</Links>
                <Links to='/desserts'>Desserts</Links>
                <Links to='/fullmenu'>Full Menu</Links>
            </Menu>
            <SideBtn>
                <SidebarRoute to='/'>ORDER NOW</SidebarRoute>
            </SideBtn>
        </Container>
            
    )
}

export default SideBarToggle
