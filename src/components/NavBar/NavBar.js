import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/db';
import { Nav, NavContainer, NavLogo, NavItems, NavLink, ButtonContainer, GitHubButton, MobileIcon, MobileMenu, MobileMenuLinks, MobileButtonContainer, Span } from '../StyledComponents/NavBarStyledComponents';
import {motion, useScroll} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../../App.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const githubLink = Bio.github;
    const LinkedIn = Bio.linkedin;
    const { scrollYProgress } = useScroll();
    const [logoClicked, setLogoClicked] = useState(false);

    useEffect(() => {
        if (logoClicked) {
            window.scrollTo(0, 0)
            setLogoClicked(false);
        }
    }, [logoClicked]);

    const handleLogoClick = () => {
        setLogoClicked(true);
    }

    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/' onClick={handleLogoClick}>
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: `${theme.primary}`, 
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
                    <NavLink href='#contact' padding='10px 10px'>Contact</NavLink>
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
                            <MobileMenuLinks
                                href="#contact"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                            >
                                Contact
                            </MobileMenuLinks>
                            <MobileButtonContainer>
                                <GitHubButton
                                    style={{
                                        padding: "10px 10px",
                                        fontSize: "20px",
                                        width: 'max-content',
                                    }}
                                    onClick={() => window.open(LinkedIn, "_blank", "noreferrer")}
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