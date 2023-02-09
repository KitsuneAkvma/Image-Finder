import React, { Component } from 'react';

import StyledSearchbar from './Searchbar.styled';

export default class Searchbar extends Component {
  render() {
    return (
      <StyledSearchbar>
        <input type="text" name="filter" placeholder="Search something..." />
      </StyledSearchbar>
    );
  }
}
