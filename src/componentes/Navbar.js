import React, { useState } from "react";
import {
  Container,LogoContainer,Wrapper,Menu,MenuItem,MenuItemLink, MobileIcon,} from "./Navbar.elements";
import {FaSistrix,FaBars,FaCartPlus,FaTimes,FaHome,FaUserAlt,FaBriefcase,FaGlasses,} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  HOME
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  ABOUT ME
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  PORTFOLIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  CONTACT ME
                </div>
              </MenuItemLink>
            </MenuItem>

            <LogoContainer>
            <FaSistrix />
          </LogoContainer>
          <LogoContainer>
            <FaUserAlt />
          </LogoContainer>
          <LogoContainer>
            <FaCartPlus/>
            </LogoContainer>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;