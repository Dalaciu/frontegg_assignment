import React from "react";
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import {
  AppContainer,
  UserContainer,
  UserImage,
  UserName,
  LogoutButton,
  LoginButton,
} from "./UserPannel.elements";
import {
  Heading,
  InfoColumn,
  InfoSec,
  TextWrapper,
} from "../InfoSection/InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { NavItemBtn } from "../Navbar/Navbar.elements";

const UserPanel = ({
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
}) => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const context = ContextHolder.getContext();
    if (context) {
      const baseUrl = context.baseUrl;
      window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    }
  };

  return (
    <InfoSec>
      <Container>
        <InfoColumn>
          <TextWrapper>
            <AppContainer>
              {isAuthenticated ? (
                <UserContainer>
                  <UserImage src={user?.profilePictureUrl} alt={user?.name} />
                  <Heading>
                    <UserName>Welcome, {user?.name}</UserName>
                  </Heading>

                  <Button $primary onClick={() => logout()}>
                    Logout
                  </Button>
                </UserContainer>
              ) : (
                <LoginButton onClick={() => loginWithRedirect()}>
                  Login
                </LoginButton>
              )}
            </AppContainer>
          </TextWrapper>
        </InfoColumn>
      </Container>
    </InfoSec>
  );
};

export default UserPanel;
