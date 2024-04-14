import { motion } from "framer-motion";
import styled from "styled-components";

export const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;

-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

export const Card = styled(motion.div)`
    width: 580px;
    background: ${({ theme }) => theme.card+99};
    border: 1px solid ${({ theme }) => theme.card_border};
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 0px 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    left: ${props => props.isEven ? "0%" : "-110%"};

    &:hover{
        box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    
    @media only screen and (max-width: 1272px){
        padding: 10px;
        gap: 8px;
        width: 450px;
        left: ${props => props.isEven ? "0%" : "-115%"};
    }
    @media only screen and (max-width: 1048px){
        position: relative;
        padding: 10px;
        gap: 8px;
        width: 350px;
        left: ${props => props.isEven ? "0%" : "-120%"};
    }
    @media only screen and (max-width: 940px){
        position: relative;
        padding: 10px;
        gap: 8px;
        width: 650px;
        left: ${props => props.isEven ? "0%" : "0%"};
    }
    @media only screen and (max-width: 768px){
        position: relative;
        padding: 10px;
        gap: 8px;
        width: 500px;
        left: ${props => props.isEven ? "0%" : "0%"};
    }
    @media only screen and (max-width: 600px){
        padding: 10px;
        gap: 8px;
        width: 320px;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`;

export const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;

export const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`;

export const Body = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`;

export const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Company = styled.div`
    font-size: 16px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Duration = styled.div`
    font-size: 12px;
    font-weight: 400px;
    color: ${({ theme }) => theme.text_secondary+80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

export const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

export const ProjectCard = styled.div`
  width: 380px;
  height: 450px;
  background: ${({ theme }) => theme.card+99};
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;   
  gap: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
    filter: brightness(1);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.3);
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const ProjectDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  /* margin-top: 10px; */
`;

export const ProjectTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectDuration = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const ProjectDescription = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;