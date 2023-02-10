import React, { Component } from 'react';

import { Grid } from 'react-loader-spinner';
import StyledLoader from './Loader.styled';

export default class Loader extends Component {
  render() {
    return (
      <StyledLoader>
        <Grid
          height="80"
          width="80"
          color="#395fab"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </StyledLoader>
    );
  }
}
