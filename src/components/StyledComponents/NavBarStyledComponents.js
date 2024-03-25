import {Link as LinkR} from "react-router-dom";
import styled from 'styled-components';

export const Nav = styled.div`
    /* background-color: ${({theme}) => theme.card_light}; */
    background:linear-gradient(38.73deg, #e0e0eb 0%, #f0f0f5 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    height: 70px;
    border-bottom: 1px solid #b3b3ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trasition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0px 0px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    margin-top: 18px;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 10px;
    list-style: none;    

    .active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    
    font-weight: 500;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.primary};
        transform: scale(0.95) translateZ(-5px);
    }

    :active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const ButtonContainer = styled.div`
    width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const GitHubButton = styled.button`
    border: 1px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 30px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    &:hover {     
        background: ${({ theme }) => theme.primary+99};
        color: ${({ theme }) => theme.white};  
        transform: scale(0.95) translateZ(-5px);   
    }
    @media screen and (max-width: 768px) { 
        font-size: 14px;
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};
`;

export const MobileMenuLinks = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;