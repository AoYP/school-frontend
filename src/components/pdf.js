import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

function PDF() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage() {
    if(pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    } else if (pageNumber == numPages) {
      setPageNumber(1)
    }
  }


  const interval = setInterval(() => {
    clearInterval(interval)
    changePage()
  }, 3000)


  return (
    <div className="PDF">
      <Document
        file="Konfiguraca przełacznika Planet - VLAN.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} height="400" />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default PDF
