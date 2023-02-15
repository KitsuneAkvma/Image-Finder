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
    filter: '',
    currentPage: 1,
    total: 0,
    totalHits: 0,
    isModalOpen: false,
    isLoading: false,
  };

  fetchData() {
    const keyword = this.state.filter;
    const page = this.state.currentPage;

    // GET images using axios
    axios(API_URL + `&q=${keyword}&page=${page}`).then(async result => {
      this.setState({
        results: await result.data.hits,
        total: await result.data.total,
        totalHits: await result.data.totalHits,
      });
      this.setState({ isLoading: false });
    });
  }
  //--------------------
  handleSearchSubmit = e => {
    e.preventDefault();

    // Getting form data
    const form = e.currentTarget;
    this.setState({ filter: form.keyword.value });
    this.setState({ currentPage: 1 });
    this.fetchData();
  };
  //--------------------
  handleModalDisplay = e => {
    console.log(e.target);
    if (e.target.tagName.toLowerCase() !== 'img') {
      this.setState({ isModalOpen: false });
    }
    
  };
  //--------------------
  handleImageClick = e => {
    console.log(e.currentTarget);
    this.setState({ isModalOpen: true });
  };
  //--------------------
  handleLoadMore = () => {
    this.setState((prevState, props) => ({
      currentPage: prevState.currentPage + 1,
    }));
    console.log(this.state.currentPage);
    this.fetchData();
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container className="App">
          {this.state.isModalOpen ? (
            <Modal handleModal={this.handleModalDisplay} />
          ) : null}
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
