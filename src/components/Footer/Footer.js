import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/db";
import { FooterContainer, FooterLogo, FooterNav, FooterNavLink, FooterWrapper, SocialMediaIcon, SocialMediaIcons, Copyright } from "../StyledComponents/FooterStyledComponents";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const LinkedIn = Bio.linkedin;
  const GitHub = Bio.github;
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>Saumya Shah </FooterLogo> 
        <SocialMediaIcons>
          <SocialMediaIcon onClick={() => window.open(LinkedIn)}><FaLinkedin /></SocialMediaIcon>
          <SocialMediaIcon onClick={() => window.open(GitHub)}><FaGithub /></SocialMediaIcon>
        </SocialMediaIcons>
        <FooterNav>
          <FooterNavLink href="#home">Home</FooterNavLink>
          <FooterNavLink href="#skills">Skills</FooterNavLink>
          <FooterNavLink href="#experience">Experience</FooterNavLink>
          <FooterNavLink href="#education">Education</FooterNavLink>
          <FooterNavLink href="#projects">Projects</FooterNavLink>          
        </FooterNav>
        <Copyright>&copy; 2024 Saumya Shah. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;