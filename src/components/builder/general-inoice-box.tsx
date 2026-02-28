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
    // Use default date if not provided
    const defaultDate = "2026-02-28";
    return (
        <Box>
            <Column>
                <label htmlFor="invoice-title" style={{display:'none'}}>{t("title")}</label>
                <Input
                    id="invoice-title"
                    type="text"
                    placeholder={t("title")}
                    value={title}
                    onChange={onTitleChange}
                    aria-label={t("title")}
                />
            </Column>
            <Column>
                <label htmlFor="invoice-date" style={{display:'none'}}>{t("date")}</label>
                <Input
                    id="invoice-date"
                    type="date"
                    placeholder={t("date")}
                    value={date || defaultDate}
                    onChange={onDateChange}
                    aria-label={t("date")}
                />
            </Column>
        </Box>
    )
}