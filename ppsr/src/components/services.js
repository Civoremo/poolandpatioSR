import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import 'boxicons';

// images
import fullBeforeAfterImage from './images/accordionImages/full_before_after.jpg';
import individualPanelsImage from './images/accordionImages/individualPanels.jpg';
import floridaGlassImage from './images/accordionImages/floridaGlass.jpg';
import frameInImage from './images/accordionImages/frameIn.jpg';
import petScreenImage from './images/accordionImages/petScreen.jpg';


const CardDisplayDiv = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitleDiv = styled.div `
  /* font-weight: bold; */
`

const CardIconDiv = styled.div `

`

const CardContentDiv = styled.div `
  display: flex;
  justify-content: space-between;
`

const CardContentImageDiv = styled.div `
  width: 350px;
  margin-right: 30px;

  @media (max-width: 767px) {
    display: none;
  }
`

const CardContentTextDiv = styled.div `
  width: 100%;
`

class ServicesPage extends Component {

  state = {
    collapsedID: ''
  }

  toggleAccordion = collapsedID => () => 
    this.setState(prevState => ({
      collapsedID: prevState.collapsedID !== collapsedID ? collapsedID : ''
    }))

  render() {
    console.log(this.state.collapsedID + ' Clicked')

    return (
      <div style={{padding: '40px 0'}}>
  
        <Container>
          <Accordion>
            <Card style={{marginBottom: '5px', borderRadius: '0', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '0' onClick={this.toggleAccordion(0)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Full Enclosure Re-Screen
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 0 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '0'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={fullBeforeAfterImage} alt='Full Before and After' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        This is when we go in and take out each piece of screen and replace it all with new screen. This process entails pulling out the old spline (rubber threads that hold the screen in) taking out all old screens, checking to be sure the structure is securely fasten into the concrete slab, adjusting hinges on your doors, putting new hardware and bug sweeps on your doors and finally installing brand new Screen in all openings. We also offer pressure washing of your pool enclosure or patio if you would like.  <span style={{fontWeight: 'bold'}}>All of our panels are rescreened separately.</span>
                      </p>
                      <p>
                        Some companies "run" the screen in a long sheet from one side to the other. <span style={{fontWeight: 'bold'}}>Don't allow this</span>; it will cause you nothing but problems in the future.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '1' onClick={this.toggleAccordion(1)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Individual Panels
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 1 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '1'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={individualPanelsImage} alt='Individual Panels' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Sometimes customers only need a few panels done. No Problem! We'll be glad to come out and go over what you'd like us to do. Also we have no problem coming out and replacing just one panel for you if that's what you need. There is no job too small for us.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '2' onClick={this.toggleAccordion(2)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Privacy Screen / Florida Glass
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 2 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '2'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={floridaGlassImage} alt='Florida Glass' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Sometimes we all feel the need for a little more privacy. If your porch is visible to various neighbors you might want to stop them from looking into your pool enclosure or porch. Florida Glass (sometimes called Privacy Screen) could be a great alternative for you. Florida Glass is a Screen product that has a smoke haze laminate on the outside. You can't see in or out of it. It's perfect for those who don't want to feel like they are being watched from their neighbor's house. Because it is a solid product and doesn't let anything pass through it, it is also great for placing around the bottom of your pool enclosure to keep the dirt from getting in.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '3' onClick={this.toggleAccordion(3)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Pet Screen
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 3 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '3'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={petScreenImage} alt='Pet Screen' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Dog still ripping screens? Wild animals getting in your enclosure? If either of these describes what you're going through then maybe pet screen is the answer. Pet screen is a thicker more plastic based screen designed to keep your animals from ripping your screens.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '4' onClick={this.toggleAccordion(4)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Frame Ins
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 4 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '4'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Do you have a porch area and would like it to be screened in? Don't let that area go to waste because of bugs! Let us come out and give you a free estimate to fill that area in. All fill ins are built with construction grade quality aluminum and include a screen door. Your patio freedom is just a phone call away.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '5' onClick={this.toggleAccordion(5)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Door Hardware
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 5 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '5'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Often times your doors just don't quite work way that they used to. Most of the time this is not a problem. Our service techs are trained to be able to pin point what's causing the problem and develop a solution. Many times this can be done by simply changing out the hardware and hinges. We can also replace the kick plate in the bottom of the door as well. All these can be done for quite a bit less than replacing the door itself.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '6' onClick={this.toggleAccordion(6)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Pet Door Installation
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 6 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '6'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Has your dog torn up your screens again? This is a common issue many home owners deal with. Many times the solution can be as simple as installing a dog door. Many dogs lose the urge to go through the screen when they know they have another way out. Also a dog door makes it easier on you and your screen doors because you're not constantly having to open the screen door to let your dog out. Dog doors come in sizes Small-Extra Large.  Small dog doors are also used for cats as well.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '7' onClick={this.toggleAccordion(7)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Hurricane Cables
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 7 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '7'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Each of these is a steel cable, secured at a top corner of the cage, and running diagonally down and secured into the cement with a metal plate and a couple of masonry screws.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{marginBottom: '5px', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '8' onClick={this.toggleAccordion(8)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Screws Replacement
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 8 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '8'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Ensure that your pool cage remains intact through the next tropical storm. Rusted screws not only stain your patio, but also diminish the structural integrity of your pool enclosure as the leverage placed on screws by the aluminum structure is enough to break with only 30 mile per hour winds. Once your concrete anchors are completely rusted through is nothing holding your screen enclosure to the concrete slab and it will blow over.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
  
            <Card style={{borderRadius: '0', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '9' onClick={this.toggleAccordion(9)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Pressure Washing
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 9 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '9'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Pressure washing can renew a surface and have dramatic results. In order to get these surfaces as clean as possible we use the surface scrubber! The surface scrubber eliminates having streaks or lines seen on surfaces from traditional spray wands. It achieves this by maintaining even pressure over a large surface area and scrubbing away left over dirt. In most cases chemicals are not needed to remove mildew and stains. However tough areas may require a chemical to be used. We use only environmentally safe chemicals.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card style={{borderRadius: '0', borderBottom: '1px solid #DFDFDF'}}>
              <Accordion.Toggle as={Card.Header} eventKey= '10' onClick={this.toggleAccordion(10)}>
                <CardDisplayDiv>
                  <CardTitleDiv>
                    Gutter Cleaning
                  </CardTitleDiv>
                  <CardIconDiv>
                    {this.state.collapsedID === 10 ? <box-icon name='chevron-up' size='sm' color='#1759AA' /> : <box-icon name='chevron-down' size='sm' color='#1759AA' />}
                  </CardIconDiv>
                </CardDisplayDiv>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey= '10'>
                <Card.Body>
                  <CardContentDiv>
                    <CardContentImageDiv>
                      <img src={frameInImage} alt='Frame In' style={{width: '300px', height: 'auto'}} />
                    </CardContentImageDiv>
                    <CardContentTextDiv>
                      <p>
                        Is it time to clean your gutters out? If so, we are happy to clean the gutters and downspouts out and can also offer you a scheduled maintenance program to clean your gutters regularly.
                      </p>
                    </CardContentTextDiv>
                  </CardContentDiv>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
  
      </div>
    )

  }

}

export default ServicesPage;