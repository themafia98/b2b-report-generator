import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import { Document } from "../document/document.tsx";
import type {IFormData} from "../builder/builder.tsx";
import styled from "@emotion/styled";

interface ViewerProps {
    formData: IFormData;
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Viewer = ({ formData }: ViewerProps) => (
    <Root>
    <PDFViewer style={{ flex: 1 }}>
        <Document formData={formData} />
    </PDFViewer>
        <PDFDownloadLink document={<Document formData={formData} />} fileName="invoice.pdf">
            {({ loading }) =>
                loading ? 'Loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
            <div style={{ margin: '24px 0', padding: '16px', background: '#f8f8f8', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ marginBottom: '8px', color: '#222' }}>Jak podpisać raport profilem zaufanym?</h3>
                <ol style={{ fontSize: '16px', color: '#444', marginLeft: '18px' }}>
                    <li>Pobierz wygenerowany plik PDF raportu.</li>
                    <li>Przejdź na stronę rządową: <a href="https://www.gov.pl/web/gov/podpisz-dokument-elektronicznie-wykorzystaj-podpis-zaufany" target="_blank" rel="noopener noreferrer">Podpisz dokument elektronicznie</a>.</li>
                    <li>Załaduj plik PDF i postępuj zgodnie z instrukcjami, aby podpisać go profilem zaufanym.</li>
                    <li>Pobierz podpisany dokument i prześlij go do odbiorcy.</li>
                </ol>
            </div>
    </Root>
);