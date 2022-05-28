import React, { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

function PDF() {
  const [pageNumber, setPageNumber] = useState(1)

  function changePage() {
    setPageNumber(prevPage => prevPage + 1)
  }

  useEffect(() => {
    setInterval(changePage, 3000)
  }, [pageNumber])

  return (
    <div className="PDF">
      <Document
        file="Konfiguraca przełacznika Planet - VLAN.pdf"
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default PDF
