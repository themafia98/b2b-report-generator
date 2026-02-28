import {Box, Column, Input} from "./styled-components.ts";
import {useTranslation} from "react-i18next";
import type {ChangeEvent} from "react";

interface IProps {
    title?: string;
    date?: string;
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const GeneralInvoiceBox = ({ title, date, onTitleChange, onDateChange }: IProps) => {
    const { t } = useTranslation();
    // Use default title and workDate if not provided
    const defaultTitle = "RAPORT Z WYKONANYCH USŁUG / SERVICE REPORT";
    const defaultWorkDate = "FEBRUARY 2026 / LUTY 2026";
    return (
        <Box>
            <Column>
                <label htmlFor="invoice-title" style={{display:'none'}}>{t("title")}</label>
                <Input
                    id="invoice-title"
                    type="text"
                    placeholder={t("title")}
                    value={title || defaultTitle}
                    onChange={onTitleChange}
                    aria-label={t("title")}
                />
            </Column>
            <Column>
                <label htmlFor="invoice-date" style={{display:'none'}}>{t("workDate")}</label>
                <Input
                    id="invoice-date"
                    type="text"
                    placeholder={t("workDate")}
                    value={date || defaultWorkDate}
                    onChange={onDateChange}
                    aria-label={t("workDate")}
                />
            </Column>
        </Box>
    )
}