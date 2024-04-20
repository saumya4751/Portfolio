import styled from "styled-components";

export const HomeContainer = styled.div`
    background: ${({ theme }) => theme.card_light+99};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 75px 30px;
    @media (max-width: 960px) {
    padding: 66px 16px;
    }
    @media (max-width: 640) {
    padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0%, 100% 100%, 70% 97%, 0 100%);
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
  max-width: 1200px;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HomeLeft = styled.div`
  width: 100%;
  order: 1;
  min-height: 100vh;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_title};
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
  line-height: 30px;
  max-width: 850px;
  margin-bottom: 42px;
  text-align: left;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const HomeRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    display: none;
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
    max-height: 300px;
  }
`;

export const Image = styled.img`
  position: relative;
  display: inline-block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 410px;
  max-height: 420px;
  padding-bottom: 50px 50px;
  background-color: ${({ theme }) => theme.img_bg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 1px;
  border-radius: 50%; 

  @media screen and (max-width: 768px) {
    display: none;
    border-radius: 50%;
    max-width: 250px;
  }

  @media screen and (max-width: 640px) {
    max-width: 250px;
    max-height: 300px;
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
    transition: all 0.3s ease-in-out !important;

    &:hover {
        background-color: ${({ theme }) => theme.primary+99};
        color: ${({ theme }) => theme.white};     
        transform: scale(0.99) translateZ(-5px); 
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }

  @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
  } 
`;