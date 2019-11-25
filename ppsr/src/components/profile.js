import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const InputField = styled.input `
    width: 100%;
    padding: 5px 5px;
    disabled: ${props => props.working ? true : false};
`

const ProfilePage = props => {
  const { lgProfile, setProfile, loggedIn } = props;

  const [ enableEdit ] = useState(false);

  const {
    handleInputChange,
    senderEmail, 
    senderFirstName, 
    senderLastName,
    credentials,
    confirmCredentials,
    senderPhone,
    senderStreet,
    senderCity,
    senderState,
    senderZipcode,
    senderGateCode,
  } = props

  const logoutHandler = event => {
    console.log(loggedIn)
    // loggedIn(false);
    setProfile(false);
    localStorage.clear();
  }

  const editHandler = event => {
    enableEdit(true)
  }
  
  return (
    <div>
      <Modal size='lg' show={lgProfile} onHide={() => setProfile(false)} >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div style={{float: 'right', height: '30px'}}>
            <a href='#profile-edit' style={{marginRight: '25px'}} onClick={() => editHandler()} >edit</a>
            <a href='#logout' onClick={() => logoutHandler()}>logout</a>
          </div>
          <InputField
            type='text'
            name='senderFirstName'
            placeholder='First Name'
            required='required'
            onChange={handleInputChange}
            value={senderFirstName}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderLastName'
            placeholder='Last Name'
            required='required'
            onChange={handleInputChange}
            value={senderLastName}
            working={enableEdit}
          ></InputField>
          <InputField
            type='text'
            name='senderEmail'
            placeholder='Email'
            required="required"
            onChange={handleInputChange}
            value={senderEmail}
            working={enableEdit}
          >              
          </InputField>
          <InputField
            type="text"
            name='senderPhone'
            placeholder='Phone #'
            required='required'
            onChange={handleInputChange}
            value={senderPhone}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderStreet'
            placeholder='Street'
            required='required'
            onChange={handleInputChange}
            value={senderStreet}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderCity'
            placeholder='City'
            required='required'
            onChange={handleInputChange}
            value={senderCity}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderState'
            placeholder='State'
            required='required'
            onChange={handleInputChange}
            value={senderState}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderZipcode'
            placeholder='Zip Code'
            required='required'
            onChange={handleInputChange}
            value={senderZipcode}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderGateCode'
            placeholder='Gate Code'
            onChange={handleInputChange}
            value={senderGateCode}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='credentials'
            placeholder='Password'
            required="required"
            onChange={handleInputChange}
            value={credentials}
            working={enableEdit}
          >              
          </InputField>
          <InputField
            type='text'
            name='confirmCredentials'
            placeholder='Confirm Password'
            required="required"
            onChange={handleInputChange}
            value={confirmCredentials}
            working={enableEdit}
          >              
          </InputField>
          <Button
            type='button'
            disabled={enableEdit}
          >
            Save
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProfilePage;