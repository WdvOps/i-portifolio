import styled from 'styled-components';

export const Container = styled.section`
  width: 60%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin: auto;

  @media (max-width: 700px) {
    flex-direction: column;
    > section {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h3 {
    margin-top: 8rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 400;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    > section {
      width: 100%;
      margin-left: 2rem;
    }
  }
  h5 {
    margin-top: 3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 400;
    line-height: 2rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    > section {
      width: 100%;
      margin-left: 2rem;
    }
  }
`;
