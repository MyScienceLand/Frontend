// import { Document, Page, pdfjs } from 'react-pdf';

// function PdfView() {
//   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//   return (
//     <div>
//       <Document file="https://www.clickdimensions.com/links/TestPDFfile.pdf">
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

// export default PdfView;
// import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/es5/build/pdf';
import React from 'react';

export default function MyApp() {
  return (
    <div>
      <iframe
        src="https://www.clickdimensionss.com/links/TestPDFfile.pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
}
