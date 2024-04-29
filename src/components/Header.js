import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
  return (
   <>
   <MainHeader>
       <NavLink to="/">
        <img src='./images/newlogo.png' alt='my logo img'/>
       </NavLink>
       <Nav/>
   </MainHeader>
   </>
  )
}
const MainHeader = styled.header`
padding: 0.4.8rem;
height: 10rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

img{
    height:10rem;
    width:15rem;
    padding-left: 2rem;
    padding-top: 0.5rem;
}
.logo{
    height: 5rem;
}
`
export default Header