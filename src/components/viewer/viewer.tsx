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
    </Root>
);