import { useState, type ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Viewer } from "../viewer/viewer.tsx";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n.ts";

const Root = styled.div`
    padding: 16px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
`;

const Box = styled.div`
    display: flex;
    gap: 8px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
`;

const Title = styled.h2`
    margin: 0 0 16px 0;
    font-size: 24px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
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

const Select = styled.select`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
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
    const { t } = useTranslation(); // Using i18next for translation
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

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <>
            <Root>
                <Select onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                </Select>

                <Box>
                    <Column>
                        <Input
                            type="text"
                            placeholder={t("title")}
                            value={formData.title}
                            onChange={selectFieldHandler("title")}
                        />
                    </Column>
                    <Column>
                        <Input
                            type="date"
                            placeholder={t("date")}
                            value={formData.date}
                            onChange={selectFieldHandler("date")}
                        />
                    </Column>
                </Box>
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
                <Button onClick={generateInvoiceHandler}>{t("generateInvoice")}</Button>
            </Root>
            <Viewer formData={formData} />
        </>
    );
};
