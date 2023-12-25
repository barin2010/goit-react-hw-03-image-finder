import React, { Component } from 'react';
import css from './ImageGallery.module.css';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return <ul className={css.ImageGallery}>{this.props.children}</ul>;
  }
}

export { ImageGallery };
