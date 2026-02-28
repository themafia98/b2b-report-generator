import React, { useEffect } from "react";
import styled from "@emotion/styled";

const ToastContainer = styled.div`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #6366f1;
  color: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(99,102,241,0.12);
  z-index: 1000;
  opacity: 0.95;
  transition: opacity 0.2s;
`;

export interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  return <ToastContainer role="status">{message}</ToastContainer>;
};

export const ToastMessages = {
  reportSaved: {
    en: "Report saved successfully",
    ru: "Отчет успешно сохранен",
    uz: "Hisobot muvaffaqiyatli saqlandi",
    kk: "Есеп сәтті сақталды",
    pl: "Raport zapisany pomyślnie"
  },
  fillRequired: {
    en: "Please fill all required fields",
    ru: "Пожалуйста, заполните все обязательные поля",
    uz: "Iltimos, barcha majburiy maydonlarni to'ldiring",
    kk: "Барлық міндетті өрістерді толтырыңыз",
    pl: "Proszę wypełnić wszystkie wymagane pola"
  }
};
