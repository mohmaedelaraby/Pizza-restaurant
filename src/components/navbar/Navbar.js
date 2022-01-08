import React from 'react'
import { Bars, Nav, NavIcon, NavLinks } from './NavbarElements'
import { Wave} from 'react-animated-text';


function Navbar({toggle}) {
    return (
        <>
            <Nav bg="red"> 
                <NavLinks to="/"> PIZZA </NavLinks>
                <NavIcon to="/" onClick={toggle}> <Wave text="SEE MENU"  effectDuration={1} /></NavIcon>
                <Bars onClick={toggle}/>
                
                
            </Nav>      
        </>
    )
}

export default Navbar
