import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Navigation from './components/navbar';
import ServicesPage from './components/services';
import AboutUs from './components/aboutus';
import ContactUs from './components/contact';

const URL = `http://res.cloudinary.com/ppscreens/image/list/ppsr.json`;

class App extends Component {
  state = {
    collapsedID: '',
    imageArray: [],
    senderEmail: '',
    senderConfirmEmail: '',
    senderFirstName: '',
    senderLastName: '',
    senderPhone: '',
    senderStreet: '',
    senderCity: '',
    senderState: '',
    senderZipcode: '',
    senderGateCode: '',
    senderServices: {
      complete: false,
      individual: false,
      window: false,
      newLanai: false,
      newEntry: false,
      pressureWashing: false,
      gutterCleaning: false,
      miscRepair: false
    },
    senderMessage: '',
    error: {
      name: '',
        email: '',
        phone: '',
        message: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
    },
    insufficientInfo: false
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        this.setState({
          imageArray: res.data.resources
        });
      })
      .catch(err => {
        console.log("ERROR --> " + err);
      })
  }

  toggleAccordion = collapsedID => () => 
    this.setState(prevState => ({
      collapsedID: prevState.collapsedID !== collapsedID ? collapsedID : ''
  }))

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearInputs = (event) => {
    this.setState({
      senderEmail: '',
      senderConfirmEmail: '',
      senderFirstName: '',
      senderLastName: '',
      senderPhone: '',
      senderStreet: '',
      senderCity: '',
      senderState: '',
      senderZipcode: '',
      senderGateCode: '',
      senderServices: {
        complete: false,
        individual: false,
        window: false,
        newLanai: false,
        newEntry: false,
        pressureWashing: false,
        gutterCleaning: false,
        miscRepair: false
      },
      senderMessage: '',
      error: {
        name: '',
        email: '',
        phone: '',
        message: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
      },
      insufficientInfo: false
    })
  }

  setErrorMessages = (errors) => {
    this.setState({
      error: errors
    })
  } 

  toggleMissingInfoMessage = (event) => {
    this.setState({
      insufficientInfo: true
    })
  }

  render() {

    return (
      <div style={{height: '2000px'}}>
        <Navigation 
          imageArray={this.state.imageArray}
        />
        <div className='callToActionSpacer' />
        <AboutUs />
        <ServicesPage 
          collapsedID={this.state.collapsedID}
          toggleAccordion={this.toggleAccordion}
        />
        <ContactUs 
          handleInputChange={this.handleInputChange}
          setErrorMessages={this.setErrorMessages}
          clearInputs={this.clearInputs}
          toggleMissingInfoMessage={this.toggleMissingInfoMessage}
          senderEmail={this.state.senderEmail}
          senderFirstName={this.state.senderFirstName}
          senderLastName={this.state.senderLastName}
          senderPhone={this.state.senderPhone}
          senderStreet={this.state.senderStreet}
          senderCity={this.state.senderCity}
          senderState={this.state.senderState}
          senderZipcode={this.state.senderZipcode}
          senderGateCode={this.state.senderGateCode}
          senderServices={this.state.senderServices}
          senderMessage={this.state.senderMessage}
          senderError={this.state.error}
          insufficientInfo={this.state.insufficientInfo}
        />
      </div>
    );
  }
}

export default App;
