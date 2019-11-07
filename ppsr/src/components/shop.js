import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const ShopPage = props => {
  const { lgShop, setShop } = props;

  return (
    <div>
      <Modal size='lg' show={lgShop} onHide={() => setShop(false)}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          Shop items
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ShopPage;