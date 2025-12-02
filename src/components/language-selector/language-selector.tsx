import styled from "@emotion/styled";
import type {ChangeEvent} from "react";
import i18n from "../../i18n/i18n.ts";

const Select = styled.select`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const LanguageSelector = () => {
    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <Select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="pl">Polski</option>
        </Select>
    )
}