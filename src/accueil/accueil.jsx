import styled, { keyframes } from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Montserrat', sans-serif;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2b3c75;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out;
`;

const CallToAction = styled.button`
  background-color: #4EEEF0;
  color: #2b3c75;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 2s ease-out;

  &:hover {
    background-color: #39d1d2;
  }
`;

export function Home(){
  return (
    <HomeContainer>
      <Title>Bienvenue</Title>
      <Subtitle>Authentification réussi</Subtitle>
      <CallToAction>Commencez</CallToAction>
    </HomeContainer>
  );
};
