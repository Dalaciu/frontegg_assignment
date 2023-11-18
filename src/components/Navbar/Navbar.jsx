import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { useAuth, useLoginWithRedirect } from "@frontegg/react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [homeClick, setHomeClick] = useState(false);

  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const handleHomeClick = () => {
    setHomeClick(true);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <strong>frontegg login demo</strong>
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} $click={click}>
              <NavItem onClick={handleHomeClick} $homeClick={homeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/">
                    {isAuthenticated ? (
                      <Button $primary>Settings</Button>
                    ) : (
                      <Button $primary onClick={() => loginWithRedirect()}>
                        Login / Sign-Up
                      </Button>
                    )}
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/">
                    {isAuthenticated ? (
                      <Button
                        onClick={() => {
                          closeMobileMenu();
                        }}
                        $fontBig
                        $primary
                      >
                        Settings
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          closeMobileMenu();
                          loginWithRedirect();
                        }}
                        $fontBig
                        $primary
                      >
                        Login
                      </Button>
                    )}
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
