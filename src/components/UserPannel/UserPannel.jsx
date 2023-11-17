import React from 'react';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import { AppContainer, UserContainer, UserImage, UserName, LogoutButton, LoginButton } from './UserPannel.elements';

const UserPanel = ({ lightText, lightTextDesc, headline, description, buttonLabel, imgStart, img, alt }) => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <AppContainer>
      { isAuthenticated ? (
        <UserContainer>
          <UserImage src={user?.profilePictureUrl} alt={user?.name}/>
          <UserName>Logged in as: {user?.name}</UserName>
          <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
        </UserContainer>
      ) : (
        <LoginButton onClick={() => loginWithRedirect()}>Login</LoginButton>
      )}
    </AppContainer>
  );
};

export default UserPanel;
