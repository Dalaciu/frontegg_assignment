import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: ${({ customPadding }) => customPadding || "160px 0px 60px 0px"};
  background: ${({ lightbg }) => (lightbg ? "#fff" : "#282A3A")};

  @media (min-width: 320px) and (max-width: 480px) {
    padding: ${({ customMobilePadding }) =>
      customMobilePadding || "60px 0px 20px 0px"};
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ $lightText }) => ($lightText ? "#f7f8fa" : "#f7f8fa")};
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ $lightTextDesc }) => ($lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
