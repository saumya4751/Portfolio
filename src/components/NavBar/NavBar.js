import React, { useState } from 'react'
import { useTheme } from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/db';
import { Nav, NavContainer, NavLogo, NavItems, NavLink, ButtonContainer, GitHubButton, MobileIcon, MobileMenu, MobileMenuLinks, MobileButtonContainer, Span } from '../StyledComponents/NavBarStyledComponents';
import {motion, useScroll} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../../App.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const githubLink = Bio.github;
    const LinkedIn = Bio.linkedin;
    const { scrollYProgress } = useScroll();

    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#000080", 
                            marginBottom: "20px",
                            cursor: "pointer",
                        }}
                    >
                        <DiCssdeck size="3rem" /><Span>Saumya</Span>
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
                    <NavLink href='#education'>Education</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton 
                        style={{marginRight: '10px'}}
                        onClick={() => window.open(LinkedIn, "_blank", "noreferrer")}
                    ><FaLinkedin /></GitHubButton>
                    <GitHubButton 
                        onClick={() => window.open(githubLink, "_blank", "noreferrer")}
                    ><FaGithub /></GitHubButton>
                </ButtonContainer>
                { 
                    open && (
                        <MobileMenu>
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
                                href="#education"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Education
                            </MobileMenuLinks>
                            <MobileMenuLinks
                                href="#projects"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Projects
                            </MobileMenuLinks>
                            <MobileButtonContainer>
                                <GitHubButton
                                    style={{
                                        padding: "10px 10px",
                                        fontSize: "20px",
                                        width: 'max-content',
                                    }}
                                    onClick={() => window.open(githubLink, "_blank", "noreferrer")}
                                >
                                    <FaLinkedin />
                                </GitHubButton>
                                <GitHubButton
                                    style={{
                                        padding: "10px 10px",
                                        fontSize: "20px",
                                        width: 'max-content',
                                    }}
                                    onClick={() => window.open(githubLink, "_blank", "noreferrer")}
                                >
                                    <FaGithub />
                                </GitHubButton>
                            </MobileButtonContainer>
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