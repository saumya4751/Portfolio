import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: left;
    font-weight: 600;
    margin-top: 75px;
    color: ${({ theme }) => theme.text_title};
    @media (max-width: 768px) {
        margin-top: 80px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: left;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary+99};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const TimelineSection = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-top: 10px;
    margin-left: -30px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: end;
    justify-content: end;
    gap: 12px;
    @media (max-width: 1272px) {
        align-items: end;
        margin-left: -100px;
    }
    @media (max-width: 1140px) {
        align-items: flex-end;
        margin-left: -20px;
    }
    @media (max-width: 1048px) {
        align-items: end;
        margin-left: -230px;
    }
    @media (max-width: 940px) {
        align-items: start;
        margin-left: -10px;
    }
    @media (max-width: 768px) {
        align-items: start;
        margin-left: -75px;
    }
`;