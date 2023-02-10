import styled from 'styled-components';

const StyledModal = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 30, 0.65);
  .modal {
    width: 90vw;
    height: 90vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default StyledModal;
