import React, { useState } from "react";
import type { IWorkItem } from "./builder";
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableCell,
  TableRow,
  RemoveButton,
  AddButton
} from "./styled-table";
import { Modal } from "../common/Modal";

interface TableProps {
  workList: IWorkItem[];
  updateWorkItem: (id: number, field: keyof IWorkItem, value: string) => void;
  removeWorkItem: (id: number) => void;
  addWorkItem: () => void;
  t: (key: string) => string;
}

/**
 * Stateless, memoized table for work items. Optimized for performance and accessibility.
 */
export const Table: React.FC<TableProps> = React.memo(({ workList, updateWorkItem, removeWorkItem, addWorkItem, t }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingRemoveId, setPendingRemoveId] = useState<number | null>(null);

  const handleRemoveClick = (id: number) => {
    setPendingRemoveId(id);
    setModalOpen(true);
  };
  const handleConfirmRemove = () => {
    if (pendingRemoveId !== null) removeWorkItem(pendingRemoveId);
    setModalOpen(false);
    setPendingRemoveId(null);
  };
  const handleCancelRemove = () => {
    setModalOpen(false);
    setPendingRemoveId(null);
  };

  return (
    <TableContainer>
      <h3 style={{ color: '#6366f1', fontWeight: 600, fontSize: 22, marginBottom: 12 }}>{t("workReportTable")}</h3>
      <StyledTable aria-label={t("workReportTable")}>
        <thead>
          <TableRow>
            <TableHeader scope="col">L.p.</TableHeader>
            <TableHeader scope="col">{t("taskDescription")}</TableHeader>
            <TableHeader scope="col">{t("hours")}</TableHeader>
            <TableHeader scope="col" />
          </TableRow>
        </thead>
        <tbody>
          {workList.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell style={{ textAlign: 'center', fontWeight: 500 }}>{idx + 1}</TableCell>
              <TableCell>
                <label htmlFor={`desc-${item.id}`} style={{display:'none'}}>{t("taskDescription")}</label>
                <input
                  id={`desc-${item.id}`}
                  type="text"
                  value={item.description}
                  onChange={e => updateWorkItem(item.id, "description", e.target.value)}
                  placeholder={t("taskDescription")}
                  aria-label={t("taskDescription")}
                  style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1.5px solid #d0d5dd', background: '#f7f8fa', fontSize: 15 }}
                />
              </TableCell>
              <TableCell>
                <label htmlFor={`hours-${item.id}`} style={{display:'none'}}>{t("hours")}</label>
                <input
                  id={`hours-${item.id}`}
                  type="number"
                  value={item.hours}
                  onChange={e => updateWorkItem(item.id, "hours", e.target.value)}
                  placeholder={t("hours")}
                  min="0"
                  step="0.01"
                  aria-label={t("hours")}
                  style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1.5px solid #d0d5dd', background: '#f7f8fa', fontSize: 15 }}
                />
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <RemoveButton onClick={() => handleRemoveClick(item.id)} aria-label={t("remove") + ` ${idx + 1}`}>{t("remove")}</RemoveButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <AddButton onClick={addWorkItem} aria-label={t("addWorkItem")}>{t("addWorkItem")}</AddButton>
      <Modal
        open={modalOpen}
        title={t("Confirm removal")}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
        confirmText={t("remove")}
        cancelText={t("cancel")}
      >
        <div>{t("Are you sure you want to remove this work item?")}</div>
      </Modal>
    </TableContainer>
  );
});
