import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Navigation from './components/navbar';
import ServicesPage from './components/services';
import AboutUs from './components/aboutus';
import Gallery from './components/gallery';

const URL = `http://res.cloudinary.com/ppscreens/image/list/ppsr.json`;

class App extends Component {
  state = {
    collapedId: '',
    imageArray: []
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

  render() {

    return (
      <div style={{height: '2000px'}}>
        <Navigation 
          imageArray={this.state.imageArray}
        />
        <div className='callToActionSpacer' />
        <AboutUs />
        <ServicesPage 
          collapedId={this.state.collapedId}
          toggleAccordion={this.toggleAccordion}
        />
        {/* <Gallery 
          imageArray={this.state.imageArray}
        /> */}
      </div>
    );
  }
}

export default App;
