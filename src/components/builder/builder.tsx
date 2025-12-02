import { useState, type ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Viewer } from "../viewer/viewer.tsx";
import { useTranslation } from "react-i18next";
import {LanguageSelector} from "../language-selector/language-selector.tsx";
import {GeneralInvoiceBox} from "./general-inoice-box.tsx";
import {InvoiceBodyBox} from "./invoice-body-box.tsx";

const Root = styled.div`
    padding: 16px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
`;

const Button = styled.button`
    padding: 16px;
    margin-top: 12px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`;

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
}

export const Builder = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<IFormData>(
        localStorage.getItem("invoice") ? JSON.parse(localStorage.getItem("invoice") as string) : {}
    );

    const selectFieldHandler = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const generateInvoiceHandler = () => {
        console.log("Generating invoice with data:", formData);
        localStorage.setItem("invoice", JSON.stringify(formData));
    }

    return (
        <>
            <Root>
                <LanguageSelector />
                <GeneralInvoiceBox
                    title={formData.title}
                    date={formData.date}
                    onTitleChange={selectFieldHandler("title")}
                    onDateChange={selectFieldHandler("date")}
                />
                <InvoiceBodyBox
                    selectFieldHandler={selectFieldHandler}
                    formData={formData}
                />
                <Button onClick={generateInvoiceHandler}>{t("generateInvoice")}</Button>
            </Root>
            <Viewer formData={formData} />
        </>
    );
};
