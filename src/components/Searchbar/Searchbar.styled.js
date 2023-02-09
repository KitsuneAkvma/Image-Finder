import styled from 'styled-components';

const StyledSearchbar = styled.section`
  padding-block: 1.3rem;

  background-color: #395fab;
  box-shadow: -1px 10px 19px -6px rgba(0, 0, 0, 0.75);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  input {
    display: block;
    width: 15%;
    height: 2.5rem;
    margin-inline: auto;

    border-radius: 10px;

    text-align: center;
    font-size: 1.5em;

    transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:focus {
      width: 50%;
      outline: none;
    }
  }
`;

export default StyledSearchbar;
