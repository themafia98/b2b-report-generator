import {Box, Column, Input, Title} from "./styled-components.ts";
import {useTranslation} from "react-i18next";
import type {IFormData} from "./builder.tsx";
import type {ChangeEvent} from "react";

interface IProps {
    formData: IFormData;
    selectFieldHandler: (
        field: string,
    ) => (e: ChangeEvent<HTMLInputElement>) => void
}

export const InvoiceBodyBox = ({ formData, selectFieldHandler }: IProps) => {
    const { t } = useTranslation();
    // Default date for workDate
    const defaultWorkDate = "2026-02-28";
    return (
        <>
        <Box>
            <Column>
                <Title>{t("aboutMe")}</Title>
                <label htmlFor="name" style={{display:'none'}}>{t("name")}</label>
                <Input
                    id="name"
                    type="text"
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={selectFieldHandler("name")}
                    aria-label={t("name")}
                />
                <label htmlFor="city" style={{display:'none'}}>{t("city")}</label>
                <Input
                    id="city"
                    type="text"
                    placeholder={t("city")}
                    value={formData.city}
                    onChange={selectFieldHandler("city")}
                    aria-label={t("city")}
                />
                <label htmlFor="address" style={{display:'none'}}>{t("address")}</label>
                <Input
                    id="address"
                    type="text"
                    placeholder={t("address")}
                    value={formData.address}
                    onChange={selectFieldHandler("address")}
                    aria-label={t("address")}
                />
                <label htmlFor="postalCode" style={{display:'none'}}>{t("postalCode")}</label>
                <Input
                    id="postalCode"
                    type="text"
                    placeholder={t("postalCode")}
                    value={formData.postalCode}
                    onChange={selectFieldHandler("postalCode")}
                    aria-label={t("postalCode")}
                />
                <label htmlFor="nip" style={{display:'none'}}>{t("nip")}</label>
                <Input
                    id="nip"
                    type="text"
                    placeholder={t("nip")}
                    value={formData.nip}
                    onChange={selectFieldHandler("nip")}
                    aria-label={t("nip")}
                />
            </Column>
            <Column>
                <Title>{t("customer")}</Title>
                <label htmlFor="customerName" style={{display:'none'}}>{t("customerName")}</label>
                <Input
                    id="customerName"
                    type="text"
                    placeholder={t("customerName")}
                    value={formData.customerName}
                    onChange={selectFieldHandler("customerName")}
                    aria-label={t("customerName")}
                />
                <label htmlFor="customerCity" style={{display:'none'}}>{t("customerCity")}</label>
                <Input
                    id="customerCity"
                    type="text"
                    placeholder={t("customerCity")}
                    value={formData.customerCity}
                    onChange={selectFieldHandler("customerCity")}
                    aria-label={t("customerCity")}
                />
                <label htmlFor="customerAddress" style={{display:'none'}}>{t("customerAddress")}</label>
                <Input
                    id="customerAddress"
                    type="text"
                    placeholder={t("customerAddress")}
                    value={formData.customerAddress}
                    onChange={selectFieldHandler("customerAddress")}
                    aria-label={t("customerAddress")}
                />
                <label htmlFor="customerPostalCode" style={{display:'none'}}>{t("customerPostalCode")}</label>
                <Input
                    id="customerPostalCode"
                    type="text"
                    placeholder={t("customerPostalCode")}
                    value={formData.customerPostalCode}
                    onChange={selectFieldHandler("customerPostalCode")}
                    aria-label={t("customerPostalCode")}
                />
                <label htmlFor="customerNip" style={{display:'none'}}>{t("customerNip")}</label>
                <Input
                    id="customerNip"
                    type="text"
                    placeholder={t("customerNip")}
                    value={formData.customerNip}
                    onChange={selectFieldHandler("customerNip")}
                    aria-label={t("customerNip")}
                />
            </Column>
        </Box>
        <Box>
            <Column>
                <Title>{t("workHoursList")}</Title>
                <label htmlFor="workDate" style={{display:'none'}}>{t("workDate")}</label>
                <Input
                    id="workDate"
                    type="date"
                    placeholder={t("workDate")}
                    value={formData.workDate || defaultWorkDate}
                    onChange={selectFieldHandler("workDate")}
                    aria-label={t("workDate")}
                />
                <label htmlFor="workDescription" style={{display:'none'}}>{t("workDescription")}</label>
                <Input
                    id="workDescription"
                    type="text"
                    placeholder={t("workDescription")}
                    value={formData.workDescription}
                    onChange={selectFieldHandler("workDescription")}
                    aria-label={t("workDescription")}
                />
                <label htmlFor="workType" style={{display:'none'}}>{t("workType")}</label>
                <Input
                    id="workType"
                    type="text"
                    placeholder={t("workType")}
                    value={formData.workType}
                    onChange={selectFieldHandler("workType")}
                    aria-label={t("workType")}
                />
                <label htmlFor="workHour" style={{display:'none'}}>{t("workHour")}</label>
                <Input
                    id="workHour"
                    type="text"
                    placeholder={t("workHour")}
                    value={formData.workHour}
                    onChange={selectFieldHandler("workHour")}
                    aria-label={t("workHour")}
                />
            </Column>
        </Box>
    </>
    )
}