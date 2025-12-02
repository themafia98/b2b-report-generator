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

    return (
        <Box>
            <Column>
                <Input
                    type="text"
                    placeholder={t("title")}
                    value={title}
                    onChange={onTitleChange}
                />
            </Column>
            <Column>
                <Input
                    type="date"
                    placeholder={t("date")}
                    value={date}
                    onChange={onDateChange}
                />
            </Column>
        </Box>
    )
}