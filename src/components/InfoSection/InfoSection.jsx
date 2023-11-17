import React from "react";
import {
  InfoSec,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from "./InfoSection.elements";
import { Container } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  customPadding,
  lightText,
  lightTextDesc,
  headline,
  description,
}) => {
  // Check if description is a string and contains '<br />' before splitting it.
  let descriptionParts = [];
  if (typeof description === "string" && description.includes("<br />")) {
    descriptionParts = description.split("<br />");
  } else {
    descriptionParts = [description];
  }
  return (
    <>
      <InfoSec lightBg={lightBg} customPadding={customPadding}>
        <Container>
          <InfoColumn>
            <TextWrapper>
              <Heading $lightText={lightText}>{headline}</Heading>
              {descriptionParts.map((part, index) => (
                <Subtitle key={index} $lightTextDesc={lightTextDesc}>
                  {part}
                </Subtitle>
              ))}
            </TextWrapper>
          </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
