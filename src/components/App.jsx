import React, { Component } from 'react';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { filter: '' };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container className="App">
          <Searchbar />
          <ImageGallery />
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
