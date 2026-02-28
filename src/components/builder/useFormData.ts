import { useState } from "react";
import type { IFormData } from "./builder";

export function useFormData(initial: IFormData = {}) {
    const [formData, setFormData] = useState<IFormData>(initial);
    const updateField = (field: keyof IFormData, value: string) => {
        setFormData({ ...formData, [field]: value });
    };
    return { formData, updateField };
}

