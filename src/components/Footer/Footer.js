import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/db";
import { FooterContainer, FooterLogo, FooterNav, FooterNavLink, FooterWrapper, SocialMediaIcon, SocialMediaIcons, Copyright } from "../StyledComponents/FooterStyledComponents";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>Saumya Shah</FooterLogo>
        <FooterNav>
          <FooterNavLink href="#home">Home</FooterNavLink>
          <FooterNavLink href="#skills">Skills</FooterNavLink>
          <FooterNavLink href="#experience">Experience</FooterNavLink>
          <FooterNavLink href="#education">Education</FooterNavLink>
          <FooterNavLink href="#projects">Projects</FooterNavLink>          
        </FooterNav>
        {/* <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons> */}
        <Copyright>&copy; 2024 Saumya Shah. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;