import breakfast from "../breakfast-menu.pdf"
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function Menu() {
    // const [file, setFile] = useState('public/breakfast-menu.pdf')
    const [numPages, setNumPages] = useState(null)
    // const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
        console.log('success')
}

    return (
        <div className="menu-container">
            <div className="outermenu">
                <h1>Breakfast Menu</h1>
            <iframe className="breakfast" title='menu' src={`${breakfast}#view=fitH`}/>

                    {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}
                >
           
           </Document>
             */}
            </div>
        </div>
    )
}

