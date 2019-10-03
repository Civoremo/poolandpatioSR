import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
// import '../index.css'

// import logoImg from './images/logo/logo_lg_alt.png';
import logoImgWhite from './images/logo/logo_lg_alt_white.png';

/*
  colors

  blue1: #163e98
  blue2: #12317a

*/

const NavLinkColor = styled.span`
	color: #eeeeee;
	font-weight: bold;

	:hover {
		color: #FFF212;
    text-decoration: underline;
	}
`;

const ActionDiv = styled.div `
  background-color: #163e98;
  color: whitesmoke;
  position: absolute;
  top: 4.3rem;
  width: 100%;
`

const PhoneNumberA = styled.a `
  font-size: 1.6rem;
  color: #fff;

  @media (min-width: 992px) {
    display: block;
  }

  @media (max-width: 991px) {
    display: none;
  }

  :hover {
    text-decoration: underline;
    color: #fff;
  }

`
const ActionTextSpan = styled.span `
  font-size: 1rem;
  color: #fff;

  @media (max-width: 991px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: block;
  }
`

const Navigationbar = () => {


  return (
    <div>
      
      <Navbar fixed='top' expand='sm' style={{backgroundColor: '#1759aa'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoImgWhite}
              alt={'PPSR'}
              style={{maxWidth: '120px', height: 'auto', marginRight: '30px'}}
            />
          </Navbar.Brand>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
            <ActionTextSpan style={{ marginRight: '10px'}}>Call </ActionTextSpan>
            <PhoneNumberA href='tel:4078008116'>407-800-8116</PhoneNumberA>
            <ActionTextSpan style={{ marginLeft: '10px'}}> for a Free Estimate!</ActionTextSpan>
          </div>
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

      <ActionDiv className='callToAction'>
        <Container>
          <div style={{ maxWidth: '100%',display: 'flex', justifyContent: 'space-around', alignItems: 'center',height: '3rem'}}>
            <span style={{fontSize: '1.4rem'}}> Call <a href='tel:4078008116' style={{color: '#fff'}}>407-800-8116</a> for a Free Estimate</span>
          </div>
        </Container>
      </ActionDiv>
      
    </div>
  )
}

export default Navigationbar;