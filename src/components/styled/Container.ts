import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  overflow: hidden;
  grid-gap: 2px;
  background-color: black;
  & > * {
    background-color: white;
  }
`;

export default Container;
