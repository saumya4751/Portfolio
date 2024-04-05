import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  /* margin-top: 2%; */
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.card_border};
  background-color: #e0e0eb;
  /* background-color: ${({ theme }) => theme.card_light}; */
  background: ${( {theme} ) => theme.nav_bg};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const FooterLogo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  /* color: #000080; */
`;

export const FooterNav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

export const FooterNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  font-size: 18px;
  margin-bottom: -20px;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: -10px;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary+99};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Copyright = styled.p`
  margin-top: 1.5rem;
  margin-bottom: -30px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
