import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const ImageModalDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GalleryPage = props => {

  const { imageArray, lgGallery, setGallery } = props;

    if(imageArray.length === 0) {
      return <p>loading</p>
    }
    
    return (
      <div>
        {/* <Container>
          <img style={{maxWidth: '100%'}} src={`https://res.cloudinary.com/ppscreens/image/upload/v${imageArray[0].version}/${imageArray[0].public_id}.${imageArray[0].format}`} />
        </Container> */}

        <Modal size="lg" show={lgGallery} onHide={() => setGallery(false)} scrollable='true'>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Pool & Patio Screen Repair Gallery
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageModalDiv>
              {/* {imageArray.map((image, index) => {
                return <img key={index} style={{width: '90%', marginBottom: '25px'}} src={`https://res.cloudinary.com/ppscreens/image/upload/v${imageArray[index].version}/${imageArray[index].public_id}.${imageArray[index].format}`} alt={`${imageArray[index].public_id}`} />
              })} */}
            </ImageModalDiv>
          </Modal.Body>
        </Modal>
      </div>
    )
    
}

export default GalleryPage;