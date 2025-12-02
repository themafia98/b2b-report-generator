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

    return (
        <>
        <Box>
            <Column>
                <Title>{t("aboutMe")}</Title>
                <Input
                    type="text"
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={selectFieldHandler("name")}
                />
                <Input
                    type="text"
                    placeholder={t("city")}
                    value={formData.city}
                    onChange={selectFieldHandler("city")}
                />
                <Input
                    type="text"
                    placeholder={t("address")}
                    value={formData.address}
                    onChange={selectFieldHandler("address")}
                />
                <Input
                    type="text"
                    placeholder={t("postalCode")}
                    value={formData.postalCode}
                    onChange={selectFieldHandler("postalCode")}
                />
                <Input
                    type="text"
                    placeholder={t("nip")}
                    value={formData.nip}
                    onChange={selectFieldHandler("nip")}
                />
            </Column>
            <Column>
                <Title>{t("customer")}</Title>
                <Input
                    type="text"
                    placeholder={t("customerName")}
                    value={formData.customerName}
                    onChange={selectFieldHandler("customerName")}
                />
                <Input
                    type="text"
                    placeholder={t("customerCity")}
                    value={formData.customerCity}
                    onChange={selectFieldHandler("customerCity")}
                />
                <Input
                    type="text"
                    placeholder={t("customerAddress")}
                    value={formData.customerAddress}
                    onChange={selectFieldHandler("customerAddress")}
                />
                <Input
                    type="text"
                    placeholder={t("customerPostalCode")}
                    value={formData.customerPostalCode}
                    onChange={selectFieldHandler("customerPostalCode")}
                />
                <Input
                    type="text"
                    placeholder={t("customerNip")}
                    value={formData.customerNip}
                    onChange={selectFieldHandler("customerNip")}
                />
            </Column>
        </Box>
        <Box>
            <Column>
                <Title>{t("workHoursList")}</Title>
                <Input
                    type="date"
                    placeholder={t("workDate")}
                    value={formData.workDate}
                    onChange={selectFieldHandler("workDate")}
                />
                <Input
                    type="text"
                    placeholder={t("workDescription")}
                    value={formData.workDescription}
                    onChange={selectFieldHandler("workDescription")}
                />
                <Input
                    type="text"
                    placeholder={t("workType")}
                    value={formData.workType}
                    onChange={selectFieldHandler("workType")}
                />
                <Input
                    type="text"
                    placeholder={t("workHour")}
                    value={formData.workHour}
                    onChange={selectFieldHandler("workHour")}
                />
            </Column>
        </Box>
    </>
    )
}