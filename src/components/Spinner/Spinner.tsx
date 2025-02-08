import styled from 'styled-components';

import loader from './loader.gif';

export default function Spinner() {
  return (
    <Container>
      <Img as="img" src={loader} alt="loader" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 999999;
`;

const Img = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
`;
