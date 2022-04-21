import React from 'react';
import './Resume.css';
import { Container, Row, Button } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../Assets/ajeiibnu-cv.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <Container className='resume-section' fluid>
      <Row className='resume'>
        <Document 
          file={pdf}
          className='d-flex justify-content-center'
        >
          <Page pageNumber={1}/>
        </Document>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
          >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  )
}
