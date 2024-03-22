import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 75px 30px;
    /* padding: 80px 30px; */
    @media (max-width: 960px) {
    padding: 66px 16px;
    }
    @media (max-width: 640) {
    padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HomeBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

export const HomeInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HomeLeft = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeRight = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600px;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  text-align: justify;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 150%;
    width: 95%;
    max-width: 300px;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 14px 0px;
    font-weight: 700;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out !important;
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }

  @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
  } 
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;