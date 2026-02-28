import styled from "@emotion/styled";

export const TableContainer = styled.div`
    margin: 24px 0;
    width: 100%;
    overflow-x: auto;
`;

export const StyledTable = styled.table`
    min-width: 320px;
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    thead {
        position: sticky;
        top: 0;
        z-index: 2;
        background: #fff;
    }
`;

export const TableHeader = styled.th`
    padding: 10px;
    font-weight: 600;
    color: #6366f1;
    font-size: 16px;
    background: #f0f0f0;
    position: sticky;
    top: 0;
    z-index: 2;
`;

export const TableCell = styled.td`
    padding: 10px;
    font-size: 15px;
    border-bottom: 1.5px solid #eee;
    text-align: left;
`;

export const TableRow = styled.tr`
    transition: background 0.2s;
`;

export const RemoveButton = styled.button`
    background: #ef4444;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 12px 20px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 16px;
    &:hover { background: #dc2626; }
`;
export const AddButton = styled.button`
    margin-top: 12px;
    background: #6366f1;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 14px 24px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.2s;
    &:hover { background: #4338ca; }
`;
