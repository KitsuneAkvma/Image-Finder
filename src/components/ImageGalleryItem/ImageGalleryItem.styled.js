import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  width: 22rem;
  height: 17rem;

  box-shadow: -13px 9px 27px -20px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export default StyledGalleryItem;
