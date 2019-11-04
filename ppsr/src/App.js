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
    credentials: '',
    confirmCredentials: '',
    confirmationKey: '',
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
      lanai: false,
      entry: false,
      washing: false,
      gutter: false,
      misc: false
    },
    senderMessage: '',
    error: {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      message: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      incomplete: ''
    },
    insufficientInfo: false,
    verified: false,
    isSelected: false
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
    console.log(event.target.name + ` - ${event.target.value}`)
  }

  handleCheckboxChange = (event, name) => {

    console.log('Name ' + event.target.name)
    console.log('Value ' + event.target.checked)

    this.setState(prevState => {
      let tempServices = { ...prevState.senderServices};
      console.table("PREV " + prevState.senderServices[name])
  
      if (name === 'complete') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'individual') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'window') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'lanai') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'entry') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'washing') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'gutter') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else if (name === 'misc') {
        tempServices[name] = !prevState.senderServices[name]
      }
      else {
        console.log('lets figure this out')
      }

      return {senderServices: tempServices}

    })
  }

  clearInputs = (event) => {
    this.setState({
      senderEmail: '',
      senderConfirmEmail: '',
      credentials: '',
      confirmCredentials: '',
      confirmationKey: '',
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
        lanai: false,
        entry: false,
        washing: false,
        gutter: false,
        misc: false
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
        incomplete: ''
      },
      insufficientInfo: false,
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

  onVerify = recaptchaResponse => {
    this.setState({
      verified: true
    })

    fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // },
      // headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        secret: `${process.env.REACT_APP_CAPTCHASECRET}`, 
        response: `${document.querySelector('#g-recaptcha-response').value}`, 
        // remoteip: 'localhost'
      })
    })
    .then(res => {
      console.log(res)
      
    })
    .catch(err => {
      console.log('error ' + err)
    })

    // let res = document.querySelector('#g-recaptcha-response').value;
    // console.log(res)
  }

  render() {
    console.log(this.state.senderServices)
    return (
      <div style={{height: '2000px'}}>
        <Navigation 
        imageArray={this.state.imageArray}
          handleInputChange={this.handleInputChange}
          // handleCheckboxChange={this.handleCheckboxChange}
          // setErrorMessages={this.setErrorMessages}
          clearInputs={this.clearInputs}
          // toggleMissingInfoMessage={this.toggleMissingInfoMessage}
          senderEmail={this.state.senderEmail}
          senderFirstName={this.state.senderFirstName}
          senderLastName={this.state.senderLastName}
          senderConfirmEmail={this.state.senderConfirmEmail}
          credentials={this.state.credentials}
          confirmCredentials={this.state.confirmCredentials}
          confirmationKey={this.state.confirmationKey}
          // senderPhone={this.state.senderPhone}
          // senderStreet={this.state.senderStreet}
          // senderCity={this.state.senderCity}
          // senderState={this.state.senderState}
          // senderZipcode={this.state.senderZipcode}
          // senderGateCode={this.state.senderGateCode}
          // senderServices={this.state.senderServices}
          // senderMessage={this.state.senderMessage}
          // senderError={this.state.error}
          // insufficientInfo={this.state.insufficientInfo}
          // verified={this.state.verified}
          // onVerify={this.onVerify}
          isSelected={this.state.isSelected}
        />
        {console.log('APP: ', this.state.isSelected)}
        <div className='callToActionSpacer' />
        <AboutUs />
        <ServicesPage 
          collapsedID={this.state.collapsedID}
          toggleAccordion={this.toggleAccordion}
        />
        <ContactUs 
          handleInputChange={this.handleInputChange}
          handleCheckboxChange={this.handleCheckboxChange}
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
          verified={this.state.verified}
          onVerify={this.onVerify}
        />
      </div>
    );
  }
}

export default App;
