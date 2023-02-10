import React, { Component } from 'react';
import axios from 'axios';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '32683324-b0ce690598d4af74b245f496c';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;
export class App extends Component {
  state = {
    results: [],
    total: 0,
    totalHits: 0,
    modalIsOpen: false,
    isLoading: false,
  };

  handleSearchSubmit = e => {
    e.preventDefault();

    // Getting form data
    const form = e.currentTarget;
    const keyword = form.keyword.value;

    // GET images using axios
    axios(API_URL + '&q=' + keyword).then(async result => {
      this.setState({
        results: await result.data.hits,
        total: await result.data.total,
        totalHits: await result.data.totalHits,
      });
      this.setState({ isLoading: false });
    });
  };
  handleIGalleryDisplay() {}
  handleLoadMore() {}
  handleImageClick = e => {
    console.log(e.currentTarget);
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container className="App">
          {this.state.modalIsOpen ? <Modal /> : null}
          <Searchbar onSearchSubmit={this.handleSearchSubmit} />
          {!this.state.isLoading ? (
            <ImageGallery
              onGalleryRender={this.handleIGalleryDisplay}
              images={this.state.results}
              onImageClick={this.handleImageClick}
            />
          ) : (
            <Loader />
          )}
          {this.state.results.length !== 0 ? (
            <Button onClick={this.handleLoadMore} />
          ) : (
            <p>THERE IS NO RESULTS</p>
          )}
          {/* <Loader /> */}
        </Container>
      </>
    );
  }
}

export default App;

//Placeholder contacts
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// { id: 'id-5', name: 'Cat Chad', number: '227-91-26' },
// { id: 'id-6', name: 'Doogie Boomer', number: '227-91-26' },
// { id: 'id-7', name: 'Annie Drown', number: '227-91-26' },
// { id: 'id-8', name: 'Eden Simpson', number: '227-91-26' },
