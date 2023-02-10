import React, { Component } from 'react';

import StyledModal from './Modal.styled';

export default class Modal extends Component {
  render() {
    return (
      <StyledModal className="overlay">
        <div className="modal">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
            alt="cat"
          />
        </div>
      </StyledModal>
    );
  }
}
