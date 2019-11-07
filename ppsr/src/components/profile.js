import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ProfilePage = props => {
  const { lgProfile, setProfile, loggedIn } = props;

  const logoutHandler = event => {
    console.log(loggedIn)
    // loggedIn(false);
    setProfile(false);
    localStorage.clear();
  }
  
  return (
    <div>
      <Modal size='lg' show={lgProfile} onHide={() => setProfile(false)} >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          Profile Info
          <Button
            type='button'
            onClick={() => logoutHandler()}
          >
            Logout
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProfilePage;