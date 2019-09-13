import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/tree_logo.svg'

const HeroContainer = styled.section`
width: 100%;
height: 100vh;
background: #292F33;
display: flex;
justify-content: space-around;
align-items: center;
margin: auto;
`;

const Left = styled.div`
width: 50%;
max-width: 800px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-left: 15%;
`;

const Right = styled.div`
width: 50%;
`;

const HeroTitle = styled.h1`
/* max-width: 800px; */
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 288px;
color: #fff;
margin: 0 auto;
text-align: left;
`;

const HeroText = styled.p`
/* max-width: 800px; */
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-style: normal;
color: #fff;
text-align: left;

`;

const HeroLogo = styled.img`
width: 100%;
max-width: 270px;
`;

const Btn = styled.button`
width: 185px;
background-color: #FFCC4D;
color: #fff;
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: bold;
border: none;
padding: 1%;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
margin: 0;
align: left;


`;

export default function Hero(){
    return (
        <HeroContainer>
            <Left>
                <HeroTitle>Hello.</HeroTitle>
                <HeroText>My name is Mark. I’m a Full Stack Developer, 
Photographer and Designer based in Eugene, Oregon. I have a passion for problem solving and creativity.</HeroText>
                <Btn>Contact</Btn>
            </Left>
            <Right>
                <HeroLogo alt='Tree Logo' src={Logo}></HeroLogo>
            </Right>
        </HeroContainer>
    )
}