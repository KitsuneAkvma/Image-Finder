import React, { Component } from 'react';

import StyledGalleryItem from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <StyledGalleryItem>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
          alt="cat image"
        />
      </StyledGalleryItem>
    );
  }
}
