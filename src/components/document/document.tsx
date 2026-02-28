import { Page, Text, View, Document as PdfDocument, StyleSheet } from '@react-pdf/renderer';
import type { IFormData } from "../builder/builder.tsx";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: '#222',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    sectionText: {
        fontSize: 12,
        marginBottom: 4,
        color: '#444',
    },
    customerSection: {
        marginBottom: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    workHoursSection: {
        marginTop: 12,
    },
    table: {
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#222',
        borderStyle: 'solid',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        borderBottomStyle: 'solid',
        alignItems: 'center',
        minHeight: 24,
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#222',
        padding: 6,
        borderRightWidth: 1,
        borderRightColor: '#bbb',
        borderRightStyle: 'solid',
    },
    tableCell: {
        fontSize: 12,
        padding: 6,
        borderRightWidth: 1,
        borderRightColor: '#eee',
        borderRightStyle: 'solid',
        flexGrow: 1,
        flexBasis: 0,
    },
    lastTableCell: {
        borderRightWidth: 0,
    },
});

interface DocumentProps {
    formData: IFormData & {
        profile?: {
            name?: string;
            position?: string;
        };
        signature?: string;
    };
}

// Random placeholder data for company and customer
const randomCompany = {
    name: "Tech Solutions Sp. z o.o.",
    address: "ul. Nowa 12/5",
    postalCode: "02-123",
    city: "Kraków",
    nip: "123-456-78-90",
};
const randomCustomer = {
    customerName: "InnovateX Polska S.A.",
    customerAddress: "ul. Zielona 45",
    customerPostalCode: "00-321",
    customerCity: "Poznań",
    customerNip: "987-654-32-10",
};

export const Document = ({ formData }: DocumentProps) => {
    // Use random data if not provided
    const company = {
        name: formData.name || randomCompany.name,
        address: formData.address || randomCompany.address,
        postalCode: formData.postalCode || randomCompany.postalCode,
        city: formData.city || randomCompany.city,
        nip: formData.nip || randomCompany.nip,
    };
    const customer = {
        customerName: formData.customerName || randomCustomer.customerName,
        customerAddress: formData.customerAddress || randomCustomer.customerAddress,
        customerPostalCode: formData.customerPostalCode || randomCustomer.customerPostalCode,
        customerCity: formData.customerCity || randomCustomer.customerCity,
        customerNip: formData.customerNip || randomCustomer.customerNip,
    };
    // Use current date if not provided
    const totalHours = formData.workList?.reduce((sum, item) => sum + (parseFloat(item.hours) || 0), 0) || 0;
    return (
        <PdfDocument>
            <Page size="A4" style={styles.page}>
                {/* Company Section */}
                <View style={styles.section}>
                    <Text style={styles.title}>{formData.title ||  `RAPORT Z WYKONANYCH USŁUG / SERVICE REPORT ${formData.date}`}</Text>
                </View>

                {/* Company Information */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>NAZWA FIRMY / COMPANY NAME</Text>
                    <Text style={styles.sectionText}>{company.name}</Text>
                    <Text style={styles.subTitle}>ADRES / ADDRESS</Text>
                    <Text style={styles.sectionText}>{company.address}</Text>
                    <Text style={styles.subTitle}>KOD POCZTOWY / POSTAL CODE</Text>
                    <Text style={styles.sectionText}>{company.postalCode}</Text>
                    <Text style={styles.subTitle}>MIASTO / CITY</Text>
                    <Text style={styles.sectionText}>{company.city}</Text>
                    <Text style={styles.subTitle}>NIP</Text>
                    <Text style={styles.sectionText}>{company.nip}</Text>
                </View>

                {/* Customer Section */}
                <View style={styles.customerSection}>
                    <Text style={styles.subTitle}>DANE KLIENTA / CUSTOMER DATA</Text>
                    <Text style={styles.sectionText}>{customer.customerName}</Text>
                    <Text style={styles.subTitle}>ADRES / ADDRESS</Text>
                    <Text style={styles.sectionText}>{customer.customerAddress}</Text>
                    <Text style={styles.subTitle}>KOD POCZTOWY / POSTAL CODE</Text>
                    <Text style={styles.sectionText}>{customer.customerPostalCode}</Text>
                    <Text style={styles.subTitle}>MIASTO / CITY</Text>
                    <Text style={styles.sectionText}>{customer.customerCity}</Text>
                    <Text style={styles.subTitle}>NIP</Text>
                    <Text style={styles.sectionText}>{customer.customerNip}</Text>
                </View>

                {/* Work Hours Section (Table) */}
                <View style={styles.workHoursSection}>
                    <Text style={styles.subTitle}>WYKAZ PRAC I GODZIN / WORK HOURS LIST</Text>
                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.tableHeader]}>L.p.</Text>
                            <Text style={[styles.tableCell, styles.tableHeader]}>Opis zadania</Text>
                            <Text style={[styles.tableCell, styles.tableHeader]}>Godziny</Text>
                        </View>
                        {/* Table Content */}
                        {Array.isArray(formData.workList) && formData.workList.length > 0 ? (
                            formData.workList.map((item, idx) => (
                                <View style={styles.tableRow} key={item.id || idx}>
                                    <Text style={styles.tableCell}>{idx + 1}</Text>
                                    <Text style={styles.tableCell}>{item?.description?.trim() ? item.description : "—"}</Text>
                                    <Text style={[styles.tableCell, styles.lastTableCell]}>{item?.hours?.trim() ? item.hours : "—"}</Text>
                                </View>
                            ))
                        ) : (
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCell}>-</Text>
                                <Text style={styles.tableCell}>Нет данных</Text>
                                <Text style={[styles.tableCell, styles.lastTableCell]}>-</Text>
                            </View>
                        )}
                    </View>
                    <Text style={{ fontSize: 12, marginTop: 8, fontWeight: 'bold', textAlign: 'right', paddingRight: 12 }}>
                        Łączna liczba godzin: {totalHours.toFixed(2)}
                    </Text>
                </View>
            </Page>
        </PdfDocument>
    );
};
