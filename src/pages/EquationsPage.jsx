import styled from 'styled-components';

export default function UnderConstruction() {
  return (
    <Wrapper>
      <Image src='/images/astronaut.PNG' alt='mowing' />
      <Title>Under Construction</Title>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  margin-top: 100px;
`;

const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 400px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    height: 260px;
    margin-bottom: 48px;
  }
`;

const Title = styled.h1`
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 0.1em;
  }
`;
