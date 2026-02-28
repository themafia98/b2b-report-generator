import React from "react";
import styled from "@emotion/styled";
import type { SavedReport } from "./useReportsStorage";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(99,102,241,0.04);
  margin-bottom: 24px;
`;
const Th = styled.th`
  padding: 12px;
  font-weight: 600;
  background: #f0f0f0;
  color: #6366f1;
  font-size: 16px;
`;
const Td = styled.td`
  padding: 12px;
  font-size: 15px;
  border-bottom: 1px solid #eee;
`;
const Row = styled.tr`
  &:hover { background: #f7f8fa; }
`;
const ActionBtn = styled.button`
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  background: #6366f1;
  color: #fff;
  &:hover { background: #4338ca; }
`;
const DangerBtn = styled(ActionBtn)`
  background: #ef4444;
  &:hover { background: #dc2626; }
`;

interface Props {
  reports: SavedReport[];
  onView: (id: string) => void;
  onRemove: (id: string) => void;
  onAICheck: (id: string) => void;
}

export const ReportsTable: React.FC<Props> = ({ reports, onView, onRemove, onAICheck }) => (
  <Table aria-label="Saved reports">
    <thead>
      <Row>
        <Th>Title</Th>
        <Th>Date</Th>
        <Th>Created</Th>
        <Th>Actions</Th>
      </Row>
    </thead>
    <tbody>
      {reports.length === 0 ? (
        <Row><Td colSpan={4} style={{textAlign:'center'}}>No saved reports</Td></Row>
      ) : reports.map(r => (
        <Row key={r.id}>
          <Td>{r.title}</Td>
          <Td>{r.date}</Td>
          <Td>{new Date(r.createdAt).toLocaleString()}</Td>
          <Td>
            <ActionBtn onClick={() => onView(r.id)}>View</ActionBtn>
            <DangerBtn onClick={() => onRemove(r.id)}>Delete</DangerBtn>
            <ActionBtn onClick={() => onAICheck(r.id)}>AI Check</ActionBtn>
          </Td>
        </Row>
      ))}
    </tbody>
  </Table>
);

