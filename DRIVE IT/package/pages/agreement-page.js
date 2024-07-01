import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaRegFilePdf } from 'react-icons/fa';

export default function Agreement() {
  const [formData, setFormData] = useState({
    owner_emirate: ''
  });
  const [file1, setFile1] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile1(selectedFile);
    }
  };

  const handleDownload = () => {
    // Replace with actual file download logic
    alert('Simulating file download. Replace with actual download logic.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    console.log(file1);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-50 p-4 rounded shadow-lg mt-3 mb-3">
        <h5 className="mb-4">Agreement Page</h5>
        <h6 className="mb-4">Trade/commercial License</h6>
        <Form onSubmit={handleSubmit}>
          <p style={{ color: '#999CA1', marginTop: '10px' }}>Step 1: Download and add your signature to the document</p>
          <div className="text-center mb-3" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <FaRegFilePdf style={{ fontSize: '2rem', color: 'red' }} /><br />
            <Button variant="danger" onClick={handleDownload} style={{ marginTop: '30px', border: '1px solid #ccc', borderRadius: '12px', backgroundColor: '#D71B22' }}>
              Download
            </Button>
          </div>
          <p style={{ color: '#999CA1', marginTop: '10px' }}>Step 2: Upload the signature added Document</p>
          <Row className="mb-3">
            <Col md={12}>
              <div
                className="text-center"
                style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', cursor: 'pointer' }}
                onClick={handleUploadClick}
              >
                <AiOutlineCloudUpload style={{ fontSize: '2rem', color: 'red' }} />
                <p>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>Click to Upload</span> or drag and drop <br />
                  SVG, PNG, JPG OR GIF (max. 800 X 400px)
                </p>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  accept=".svg, .png, .jpg, .gif"
                  onChange={handleFileChange}
                />
                {file1 && <p>Selected File: {file1.name}</p>}
              </div>
            </Col>
          </Row>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="secondary" style={{ width: '120px', height: '40px', marginRight: '10px' }}>
              Back
            </Button>
            <Button variant="danger" type="submit" style={{ width: '120px', height: '40px' }} disabled={!file1}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
