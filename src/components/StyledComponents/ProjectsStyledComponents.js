import styled from "styled-components";

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary+99};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 10px 0;
  margin-bottom: 5%;
  @media (max-width: 768px){
      font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 5px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary+50};
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;