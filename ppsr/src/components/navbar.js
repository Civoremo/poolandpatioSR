import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
// import '../index.css'

import logoImg from './images/logo/logo_lg_alt.png';
import logoImgWhite from './images/logo/logo_lg_alt_white.png';

/*
  colors

  blue1: #163e98
  blue2: #12317a

*/

const NavBG = styled.nav`
  /* background-color: #1759aa;
  color: #163e98;
	margin-bottom: 20px;
	padding-top: 8px;
	padding-bottom: 8px; */
  /* border-top: 1px solid #bcbcbc; */
	/* border-bottom: 1px solid #bcbcbc; */
  /* box-shadow: 0px 5px 5px #dadada; */
`;
const NavLinkColor = styled.span`
	color: #eeeeee;
	font-weight: bold;

	:hover {
		color: #FFF212;
    /* text-decoration: underline; */
	}
`;

const ActionDiv = styled.div `
  background-color: #163e98;
  color: whitesmoke;
  position: absolute;
  top: 4.3rem;
  width: 100%;
`

const Navigationbar = () => {


  return (
    <div>
      
      {/* <NavBG> */}
        <Navbar fixed='top' expand='sm' style={{backgroundColor: '#1759aa'}}>
          <Container>
              <Navbar.Brand href="#home">
                <img
                  src={logoImgWhite}
                  alt={'PPSR'}
                  style={{maxWidth: '120px', height: 'auto'}}
                />
              </Navbar.Brand>
              <Navbar.Toggle className='hamburger-custom' aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav className="navbar-custom">
                  <Nav.Link href="#home"><NavLinkColor>About</NavLinkColor></Nav.Link>
                  <Nav.Link href="#home"><NavLinkColor>Services</NavLinkColor></Nav.Link>
                  <Nav.Link href="#home"><NavLinkColor>Financing</NavLinkColor></Nav.Link>
                  <Nav.Link href="#home"><NavLinkColor>Gallery</NavLinkColor></Nav.Link>
                  <Nav.Link href="#home"><NavLinkColor>Contact</NavLinkColor></Nav.Link>
                </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>
      {/* </NavBG> */}

      <ActionDiv className='callToAction'>
        <Container>
          <div style={{ maxWidth: '100%',display: 'flex', justifyContent: 'space-around', alignItems: 'center',height: '3rem'}}>
            <span style={{fontSize: '1.4rem'}}> Call 407-800-8116 for a Free Estimate</span>
          </div>
        </Container>
      </ActionDiv>
      
    </div>
  )
}

export default Navigationbar;