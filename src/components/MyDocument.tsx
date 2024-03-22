import { Document, Page } from "react-pdf";

export const MyDocument = () => (
  <Document>
    <Page size="A4" className="flex-row" />
  </Document>
);
