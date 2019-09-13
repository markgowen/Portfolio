import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/tree_logo.svg';

const Nav = styled.section`
width: 100%;
height: 60px;
`;

const NavBar = styled.div`
width: 90%;
max-height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
padding-top: 10px;
`;

const NavLogo = styled.img`
width: 60px;
`;

const NavLinks = styled.div`
width: 15%;
display: flex;
justify-content: space-around;
align-items: center;

@media only screen and (max-width: 600px) {
    width: 50%;
}
`;

const Link = styled.a`
text-decoration: none;
color: black;
font-size: 12px;
color: #FFCC4D;
`;

export default function Navigation() {
    return (
        <Nav>
            <NavBar>
                <NavLogo alt='tree logo' src={Logo}></NavLogo>
                <NavLinks>
                    <Link href='#'>PROJECTS</Link>
                    <Link href='#'>ABOUT</Link>
                    <Link href='#'>CONTACT</Link>
                </NavLinks>
            </NavBar>
        </Nav>
    )
}
