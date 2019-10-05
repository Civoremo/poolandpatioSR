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
    senderName: '',
    senderMessage: '',
    error: {
      name: '',
      email: '',
      message: ''
    }
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
      senderName: '',
      senderMessage: '',
      error: {}
    })
  }

  setErrorMessages = (errors) => {
    this.setState({
      error: errors
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
          senderEmail={this.state.senderEmail}
          senderName={this.state.senderName}
          senderMessage={this.state.senderMessage}
          senderError={this.state.error}
        />
      </div>
    );
  }
}

export default App;
