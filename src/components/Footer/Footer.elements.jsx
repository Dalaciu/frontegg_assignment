import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #282A3A;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Disclaimer = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;