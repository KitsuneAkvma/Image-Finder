import React, { Component } from 'react';

import StyledGallery from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <StyledGallery>
        <ul>
          {this.props.images.map(image => {
            return (
              <li key={image.id}>
                <ImageGalleryItem
                  thumbnail={image.webformatURL}
                  fullSizeImage={image.largeImageURL}
                  description={image.tags}
                  onImageClick={this.props.onImageClick}
                />
              </li>
            );
          })}
        </ul>
      </StyledGallery>
    );
  }
}
