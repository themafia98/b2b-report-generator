import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "title": "Title",
            "date": "Date",
            "name": "Name",
            "city": "City",
            "address": "Address",
            "postalCode": "Postal Code",
            "nip": "NIP",
            "customerName": "Customer Name",
            "customerCity": "Customer City",
            "customerAddress": "Customer Address",
            "customerPostalCode": "Customer Postal Code",
            "customerNip": "Customer NIP",
            "workDate": "Work Date",
            "workDescription": "Work Description",
            "workType": "Work Type",
            "workHour": "Work Hour",
            "generateInvoice": "Generate Invoice",
            "aboutMe": "About Me",
            "customer": "Customer",
            "workHoursList": "Work Hours List"
        }
    },
    pl: {
        translation: {
            "title": "Tytuł",
            "date": "Data",
            "name": "Imię",
            "city": "Miasto",
            "address": "Adres",
            "postalCode": "Kod pocztowy",
            "nip": "NIP",
            "customerName": "Nazwa klienta",
            "customerCity": "Miasto klienta",
            "customerAddress": "Adres klienta",
            "customerPostalCode": "Kod pocztowy klienta",
            "customerNip": "NIP klienta",
            "workDate": "Data pracy",
            "workDescription": "Opis pracy",
            "workType": "Typ pracy",
            "workHour": "Czas pracy",
            "generateInvoice": "Generuj fakturę",
            "aboutMe": "O mnie",
            "customer": "Klient",
            "workHoursList": "Wykaz godzin pracy"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',  // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
