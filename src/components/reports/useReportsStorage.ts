import { useState, useCallback, useEffect } from "react";
import type { IFormData } from "../builder/builder";

export interface SavedReport {
  id: string;
  title: string;
  date: string;
  createdAt: string;
  data: IFormData;
}

const STORAGE_KEY = "b2b_reports";

function getReports(): SavedReport[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveReports(reports: SavedReport[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

export function useReportsStorage() {
  const [reports, setReports] = useState<SavedReport[]>(getReports());

  useEffect(() => {
    setReports(getReports());
  }, []);

  const addReport = useCallback((data: IFormData) => {
    const newReport: SavedReport = {
      id: Date.now().toString(),
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().slice(0, 10),
      createdAt: new Date().toISOString(),
      data,
    };
    const updated = [newReport, ...getReports()];
    saveReports(updated);
    setReports(updated);
  }, []);

  const removeReport = useCallback((id: string) => {
    const updated = getReports().filter(r => r.id !== id);
    saveReports(updated);
    setReports(updated);
  }, []);

  const getReport = useCallback((id: string) => {
    return getReports().find(r => r.id === id);
  }, []);

  return { reports, addReport, removeReport, getReport };
}

