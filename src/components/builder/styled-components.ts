import styled from "@emotion/styled";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    @media (max-width: 600px) {
        padding: 0 4px;
        gap: 8px;
    }
`;

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    flex: 1;
    min-width: 0;
`;

export const Box = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 24px;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 900px) {
        padding: 12px;
        gap: 12px;
    }
    @media (max-width: 600px) {
        padding: 6px;
        gap: 6px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 18px;
    min-width: 180px;
    box-sizing: border-box;
    @media (max-width: 600px) {
        min-width: 120px;
        gap: 8px;
    }
`;

export const Input = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1.5px solid #d0d5dd;
    border-radius: 6px;
    background: #f7f8fa;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
    width: 100%;
    &:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 2px #6366f133;
        outline: none;
    }
    @media (max-width: 600px) {
        padding: 8px;
        font-size: 14px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 18px 0;
    font-size: 26px;
    font-weight: 600;
    color: #6366f1;
    @media (max-width: 600px) {
        font-size: 18px;
        margin-bottom: 8px;
    }
`;

export const ErrorText = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 8px;
`;
