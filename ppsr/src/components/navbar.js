import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
// import '../index.css'

import logoImg from './images/logo/logo_lg_alt.png';


const NavBG = styled.nav`
	background-color: #12317a;
	margin-bottom: 20px;
	padding-top: 8px;
	padding-bottom: 8px;
  border-top: 1px solid #bcbcbc;
	border-bottom: 1px solid #bcbcbc;
	/* box-shadow: 0px 5px 5px #dadada; */
`;
const NavLinkColor = styled.span`
	color: #eeeeee;
	font-weight: bold;

	:hover {
		color: #0098DA;
    /* text-decoration: underline; */
	}
`;

const NavContentContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 0 10px; */
`

const Navigationbar = () => {


  return (
    <div>
      <div>
        phone number space
      </div>
      <NavBG>
        <Navbar sticky='top' expand='sm'>
          <Container>
            {/* <NavContentContainer> */}
              {/* <div> */}
                <Navbar.Brand href="#home">
                  <img
                    src={logoImg}
                    alt={'PPSR'}
                    style={{maxWidth: '120px', height: 'auto'}}
                  />
                </Navbar.Brand>
              {/* </div> */}
              {/* <div> */}
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
              {/* </div> */}
            {/* </NavContentContainer> */}
          </Container>
        </Navbar>
      </NavBG>
    </div>
  )
}

export default Navigationbar;