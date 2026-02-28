import type { IFormData } from "./builder";
import { useState } from "react";

export interface ValidationErrors {
  [key: string]: string;
}

export function useValidation(formData: IFormData) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  function validate() {
    const newErrors: ValidationErrors = {};
    if (!formData.title || !formData.title.trim()) newErrors.title = "Required";
    if (!formData.date || !formData.date.trim()) newErrors.date = "Required";
    if (!formData.name || !formData.name.trim()) newErrors.name = "Required";
    if (!formData.address || !formData.address.trim()) newErrors.address = "Required";
    if (!formData.postalCode || !formData.postalCode.trim()) newErrors.postalCode = "Required";
    if (!formData.city || !formData.city.trim()) newErrors.city = "Required";
    if (!formData.nip || !formData.nip.trim()) newErrors.nip = "Required";
    if (!formData.customerName || !formData.customerName.trim()) newErrors.customerName = "Required";
    if (!formData.customerAddress || !formData.customerAddress.trim()) newErrors.customerAddress = "Required";
    if (!formData.customerPostalCode || !formData.customerPostalCode.trim()) newErrors.customerPostalCode = "Required";
    if (!formData.customerCity || !formData.customerCity.trim()) newErrors.customerCity = "Required";
    if (!formData.customerNip || !formData.customerNip.trim()) newErrors.customerNip = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return { errors, validate };
}

