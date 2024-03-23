import React, { useState } from 'react'
import { useTheme } from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/db';
import { Nav, NavContainer, NavLogo, NavItems, NavLink, ButtonContainer, GitHubButton, MobileIcon, MobileMenu, MobileMenuLinks, Span } from '../StyledComponents/NavBarStyledComponents';
import {motion, useScroll} from "framer-motion";
import '../../App.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const githubLink = Bio.github;
    const { scrollYProgress } = useScroll();

    return (
        <Nav>
            
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "purple", 
                            marginBottom: "20px",
                            cursor: "pointer",
                        }}
                    >
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href='#home'>Home</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton 
                        onClick={() => window.open(githubLink, "_blank", "noreferrer")}
                    >GitHub Profile</GitHubButton>
                </ButtonContainer>
                { 
                    open && (
                        <MobileMenu open={open}>
                            <MobileMenuLinks
                                href="#home"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Home
                            </MobileMenuLinks>
                            <MobileMenuLinks
                                href="#skills"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Skills
                            </MobileMenuLinks>
                            <MobileMenuLinks
                                href="#experience"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Experience
                            </MobileMenuLinks>
                            <MobileMenuLinks
                                href="#projects"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Projects
                            </MobileMenuLinks>
                            <MobileMenuLinks
                                href="#education"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Education
                            </MobileMenuLinks>
                            <GitHubButton
                                style={{
                                    padding: "10px 16px",
                                    background: `${theme.primary}`,
                                    color: "white",
                                    width: 'max-content',
                                }}
                                onClick={() => window.open(githubLink, "_blank", "noreferrer")}
                            >
                                Github Profile
                            </GitHubButton>
                        </MobileMenu>
                    ) 
                }
            </NavContainer>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
        </Nav>
    )
}

export default Navbar