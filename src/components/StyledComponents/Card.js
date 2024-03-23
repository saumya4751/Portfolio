import styled from "styled-components";

export const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;

-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

export const Card = styled.div`
    width: 590px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    left: ${props => props.isEven ? "75%" : "-770%"};

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    
    @media only screen and (max-width: 1300px){
        padding: 10px;
        gap: 8px;
        width: 500px;
        left: ${props => props.isEven ? "75%" : "-650%"};
    }
    @media only screen and (max-width: 1048px){
        padding: 10px;
        gap: 8px;
        width: 350px;
        left: ${props => props.isEven ? "75%" : "-450%"};
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 500px;
        left: ${props => props.isEven ? "80%" : "80%"};
    }
    @media only screen and (max-width: 600px){
        padding: 10px;
        gap: 8px;
        width: 320px;
        left: ${props => props.isEven ? "80%" : "80%"};
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #854CE6;
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
    color: ${({ theme }) => theme.text_primary+99};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Company = styled.div`
    font-size: 16px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary+99};

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