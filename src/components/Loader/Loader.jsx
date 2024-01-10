import { BallTriangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <BallTriangle
        height="100"
        width="100"
        color="#964262"
        ariaLabel="loading"
      />
    </Container>
  );
};
