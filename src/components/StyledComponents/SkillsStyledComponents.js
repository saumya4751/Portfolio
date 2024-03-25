import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

export const Skill = styled.div`
  width: 60%;
  max-width: 600px;
  background: ${({ theme }) => theme.card+99};
  border: 0.1px solid ${({ theme }) => theme.card_border};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 0px 10px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    background-color: #f3f2f2;
  }
  
  @media (max-width: 768px) {
    max-width: 450px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

export const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary + 50};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;