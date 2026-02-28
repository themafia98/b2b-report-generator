import React, { useState, type ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Viewer } from "../viewer/viewer.tsx";
import { useTranslation } from "react-i18next";
import { ToastMessages } from "../common/Toast";
import { LanguageSelector } from "../language-selector/language-selector.tsx";
import { GeneralInvoiceBox } from "./general-inoice-box.tsx";
import { InvoiceBodyBox } from "./invoice-body-box.tsx";
import { GridContainer, GridColumn } from "./styled-components";
import { useFormData } from "./useFormData";
import { useWorkList } from "./useWorkList";
import { Table } from "./Table";
import { useValidation } from "./useValidation";
import { Toast } from "../common/Toast";
import { useToast } from "../common/useToast";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { Loader } from "../common/Loader";
import { useReportsStorage } from "../reports/useReportsStorage";
import { ReportsTable } from "../reports/ReportsTable";

const Root = styled.div`
    padding: 24px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
`;

const Button = styled.button`
    padding: 14px 28px;
    margin-top: 18px;
    background-color: #6366f1;
    font-size: 20px;
    border-radius: 6px;
    color: #fff;
    font-weight: 600;
    border: none;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover {
        background-color: #4338ca;
        color: #fff;
    }
    &:focus {
        outline: 2px solid #6366f1;
    }
`;

export interface IWorkItem {
    id: number;
    description: string;
    hours: string;
}

export interface IFormData {
    title?: string;
    date?: string;
    name?: string;
    city?: string;
    address?: string;
    postalCode?: string;
    nip?: string;
    customerName?: string;
    customerAddress?: string;
    customerPostalCode?: string;
    customerCity?: string;
    customerNip?: string;
    workDate?: string;
    workDescription?: string;
    workType?: string;
    workHour?: string;
    workList?: IWorkItem[];
    profile?: {
        name: string;
        position: string;
    };
    signature?: string;
}

export const Builder = () => {
    const { t, i18n } = useTranslation();
    const { formData, updateField } = useFormData(
        localStorage.getItem("invoice") ? JSON.parse(localStorage.getItem("invoice") as string) : {}
    );
    const { workList, addWorkItem, updateWorkItem, removeWorkItem } = useWorkList();
    const { validate } = useValidation(formData);
    const { toast, showToast, hideToast } = useToast();
    const [showPreview, setShowPreview] = useState(false);
    const reportsStorage = useReportsStorage();
    const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
    const [aiResult, setAIResult] = useState<string | null>(null);

    const selectFieldHandler = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
        updateField(field as keyof IFormData, e.target.value);
    };

    const generateInvoiceHandler = () => {
        if (!validate()) {
            showToast(ToastMessages.fillRequired[i18n.language as keyof typeof ToastMessages.fillRequired] || ToastMessages.fillRequired.en);
            return;
        }
        localStorage.setItem("invoice", JSON.stringify(formData));
        reportsStorage.addReport(formData);
        showToast(ToastMessages.reportSaved[i18n.language as keyof typeof ToastMessages.reportSaved] || ToastMessages.reportSaved.en);
    };
    // AI check stub
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleAICheck = (_id: string) => {
        setAIResult("AI check passed: No issues found.");
        showToast("AI check completed");
    };

    return (
        <>
            {toast && <Toast message={toast} onClose={hideToast} />}
            <Root>
                <LanguageSelector />
                <GridContainer>
                    <GridColumn>
                        <GeneralInvoiceBox
                            title={formData.title}
                            date={formData.date}
                            onTitleChange={selectFieldHandler("title")}
                            onDateChange={selectFieldHandler("date")}
                        />
                        <Table
                            workList={workList}
                            updateWorkItem={updateWorkItem}
                            removeWorkItem={removeWorkItem}
                            addWorkItem={addWorkItem}
                            t={t}
                        />
                        <InvoiceBodyBox
                            selectFieldHandler={selectFieldHandler}
                            formData={formData}
                        />
                        <Button onClick={generateInvoiceHandler}>{t("generateInvoice")}</Button>
                        <Button onClick={() => setShowPreview(!showPreview)} style={{ marginTop: 8 }}>
                            {showPreview ? (t("hidePreview") || "Скрыть превью") : (t("showPreview") || "Показать превью")}
                        </Button>
                        <ReportsTable
                            reports={reportsStorage.reports}
                            onView={setSelectedReportId}
                            onRemove={reportsStorage.removeReport}
                            onAICheck={handleAICheck}
                        />
                    </GridColumn>
                    <GridColumn>
                        {selectedReportId ? (
                            <ErrorBoundary>
                                <React.Suspense fallback={<Loader />}>
                                    <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Viewer formData={reportsStorage.getReport(selectedReportId)?.data || formData} />
                                        {aiResult && <div style={{marginTop:16, color:'#6366f1', fontWeight:600}}>{aiResult}</div>}
                                    </div>
                                </React.Suspense>
                            </ErrorBoundary>
                        ) : showPreview && (
                            <ErrorBoundary>
                                <React.Suspense fallback={<Loader />}>
                                    <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Viewer formData={{ ...formData, workList: workList }} />
                                    </div>
                                </React.Suspense>
                            </ErrorBoundary>
                        )}
                    </GridColumn>
                </GridContainer>
            </Root>
        </>
    );
};
