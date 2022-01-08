//styeld-components sheet 

import {NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
    background-color:transparent;
    display: flex;
    height: 80px;
    justify-content: center;
    font-weight: 700;
`
export const NavLinks = styled(Link)`
 color: #fff;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    
  }
`
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 27px;
  right: 73px;
  height: 100px;
  cursor: pointer;
  color: #fff;
  p {
    margin-left: 10px;
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`

export const Bars = styled(FaPizzaSlice)`
    position: absolute;
    right: 0;
    top: 15px;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    transform: translate(-50%,15%);
    p {
    margin-left: 10px;
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

`