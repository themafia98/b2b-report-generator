import React from "react";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(99,102,241,0.18);
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h3`
  font-size: 22px;
  color: #6366f1;
  font-weight: 700;
  margin-bottom: 18px;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`;

const ModalButton = styled.button`
  padding: 12px 28px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: #6366f1;
  color: #fff;
  transition: background 0.2s;
  &:hover { background: #4338ca; }
`;

export interface ModalProps {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const Modal: React.FC<ModalProps> = ({ open, title, children, onConfirm, onCancel, confirmText = "OK", cancelText = "Cancel" }) => {
  if (!open) return null;
  return (
    <Overlay role="dialog" aria-modal="true">
      <ModalBox>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ModalActions>
          <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
          <ModalButton onClick={onCancel} style={{ background: '#ef4444' }}>{cancelText}</ModalButton>
        </ModalActions>
      </ModalBox>
    </Overlay>
  );
};

