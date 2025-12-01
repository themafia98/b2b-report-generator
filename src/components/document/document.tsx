import { Page, Text, View, Document as PdfDocument, StyleSheet } from '@react-pdf/renderer';
import type { IFormData } from "../builder/builder.tsx";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    section: {
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionText: {
        fontSize: 12,
        marginBottom: 5,
    },
    customerSection: {
        marginBottom: 15,
    },
    boldText: {
        fontWeight: 'bold',
    },
    workHoursSection: {
        marginTop: 10,
    },
    table: {
        width: '100%',
        marginTop: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '1px solid #000',
        paddingBottom: 5,
        marginBottom: 5,
    },
    tableCell: {
        width: '25%',
        padding: 5,
        fontSize: 12,
    },
    tableHeader: {
        fontWeight: 'bold',
    },
    tableContent: {
        width: '25%',
    },
});

interface DocumentProps {
    formData: IFormData;
}

export const Document = ({ formData }: DocumentProps) => (
    <PdfDocument>
        <Page size="A4" style={styles.page}>
            {/* Company Section */}
            <View style={styles.section}>
                <Text style={styles.title}>{formData.title}</Text>
                <Text style={styles.title}>{formData.date}</Text>
            </View>

            {/* Company Information */}
            <View style={styles.section}>
                <Text style={styles.subTitle}>NAZWA FIRMY / COMPANY NAME</Text>
                <Text style={styles.sectionText}>{formData.name}</Text>
                <Text style={styles.subTitle}>ADRES / ADDRESS</Text>
                <Text style={styles.sectionText}>{formData.address}</Text>
                <Text style={styles.subTitle}>KOD POCZTOWY / POSTAL CODE</Text>
                <Text style={styles.sectionText}>{formData.postalCode}</Text>
                <Text style={styles.subTitle}>MIASTO / CITY</Text>
                <Text style={styles.sectionText}>{formData.city}</Text>
                <Text style={styles.subTitle}>NIP</Text>
                <Text style={styles.sectionText}>{formData.nip}</Text>
            </View>

            {/* Customer Section */}
            <View style={styles.customerSection}>
                <Text style={styles.subTitle}>DANE KLIENTA / CUSTOMER DATA</Text>
                <Text style={styles.sectionText}>{formData.customerName}</Text>
                <Text style={styles.subTitle}>ADRES / ADDRESS</Text>
                <Text style={styles.sectionText}>{formData.customerAddress}</Text>
                <Text style={styles.subTitle}>KOD POCZTOWY / POSTAL CODE</Text>
                <Text style={styles.sectionText}>{formData.customerPostalCode}</Text>
                <Text style={styles.subTitle}>MIASTO / CITY</Text>
                <Text style={styles.sectionText}>{formData.customerCity}</Text>
                <Text style={styles.subTitle}>NIP</Text>
                <Text style={styles.sectionText}>{formData.nip}</Text>
            </View>

            {/* Work Hours Section (Table) */}
            <View style={styles.workHoursSection}>
                <Text style={styles.subTitle}>WYKAZ PRAC I GODZIN / WORK HOURS LIST</Text>

                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Data</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Wykonane uslugi (opis)</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Uslugi</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Laczny czas pracy</Text>
                    </View>

                    {/* Table Content */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>{formData.workDate}</Text>
                        <Text style={styles.tableCell}>{formData.workDescription}</Text>
                        <Text style={styles.tableCell}>{formData.workType}</Text>
                        <Text style={styles.tableCell}>{formData.workHour} godzin</Text>
                    </View>
                </View>
            </View>
        </Page>
    </PdfDocument>
);
