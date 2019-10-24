import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const SignIn = props => {
    const { lgSignIn, setSignIn } = props;
    
    return (
        <div>
            <Modal size='lg' show={lgSignIn} onHide={() => setSignIn(false)} >
                <Modal.Header id='example-modal-size-title-sm'>
                    <Modal.Title id='example-modal-sizes-sm'>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{border: '1px solid red'}}>
                        {/* <div>
                            <img style={{border: '1px solid red'}}></img>
                            <div style={{border: '1px solid red'}}></div>
                            <div style={{border: '1px solid red'}}></div>
                        </div> */}
                    </img>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SignIn;