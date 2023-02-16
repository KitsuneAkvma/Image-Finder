import React, { Component } from 'react';

import StyledModal from './Modal.styled';

export default class Modal extends Component {
  render() {
    return (
      <StyledModal className="overlay" onClick={this.props.handleModal}>
        <img src={this.props.fullsizeimage} alt="cat" />
      </StyledModal>
    );
  }
}
