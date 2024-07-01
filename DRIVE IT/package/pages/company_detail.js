import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai'; 

export default function Register() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyContact: '',
    secondaryCompanyContact: '',
    officeAddress: '',
    trafficFileNumber: '',
    tradeLicence: '',
    ownerEmiratesID: ''
  });

  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null); 
  const [file2, setFile2] = useState(null); 

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
      setFile(selectedFile);
    }
  };

  const handleFileChange1 = (e) => { 
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile1(selectedFile);
    }
  };

  const handleFileChange2 = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile2(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Company Name: ${formData.companyName}\nCompany Contact: ${formData.companyContact}\nSecondary Company Contact: ${formData.secondaryCompanyContact}\nOffice Address: ${formData.officeAddress}\nTraffic File Number: ${formData.trafficFileNumber}\nTrade Licence: ${formData.tradeLicence}\nOwner Emirates ID: ${formData.ownerEmiratesID}\nFiles:\n1. ${file ? file.name : 'No file selected'}\n2. ${file1 ? file1.name : 'No file selected'}\n3. ${file2 ? file2.name : 'No file selected'}`
    );
    setFormData({
      companyName: '',
      companyContact: '',
      secondaryCompanyContact: '',
      officeAddress: '',
      trafficFileNumber: '',
      tradeLicence: '',
      ownerEmiratesID: ''
    });
    setFile(null);
    setFile1(null);
    setFile2(null);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleUploadClick1 = () => {
    document.getElementById('fileInput1').click();
  };

  const handleUploadClick2 = () => {
    document.getElementById('fileInput2').click();
  };


  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-75 p-4 rounded shadow-lg mt-3 mb-3" >
        <h5 className="mb-4">Company Detail Form</h5>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter Your Company Name Here"
                  required
                  style={{ background: '#d3d3d30f' }} 

                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="companyContact">
                <Form.Label>Company Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="companyContact"
                  value={formData.companyContact}
                  onChange={handleChange}
                  placeholder="Enter Your Company Contact Here"
                  required
                  style={{ background: '#d3d3d30f' }} 

                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="secondaryCompanyContact">
            <Form.Label>Secondary Company Contact</Form.Label>
            <Form.Control
              type="text"
              name="secondaryCompanyContact"
              value={formData.secondaryCompanyContact}
              onChange={handleChange}
              placeholder="Enter Your Secondary Company Contact Here"
              required
              style={{ background: '#d3d3d30f' }} 

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="officeAddress">
            <Form.Label>Office Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Enter Your Office Address Here"
              required
              style={{ background: '#d3d3d30f' }} 

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="trafficFileNumber">
            <Form.Label>Traffic File Number</Form.Label>
            <Form.Control
              type="text"
              name="trafficFileNumber"
              value={formData.trafficFileNumber}
              onChange={handleChange}
              placeholder="Enter Your Traffic File Number Here"
              required
              style={{ background: '#d3d3d30f' }} 

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tradeLicence">
            <Form.Label>Trade/commercial Licence</Form.Label>
            <Form.Control
              type="text"
              name="tradeLicence"
              value={formData.tradeLicence}
              onChange={handleChange}
              placeholder="Enter Your Trade Licence Number Here"
              required
              style={{ background: '#d3d3d30f' }} 

            />
          </Form.Group>
          <div className="text-center mb-3" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <p className="mb-1">Note: Upload your Trade license/Commercial Licence</p>
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                backgroundColor: '#f5f5f5',
                borderRadius: '50%',
                padding: '10px',
                width: 'fit-content',
                cursor: 'pointer'
              }}
              onClick={handleUploadClick} 
            >
              <AiOutlineCloudUpload style={{ fontSize: '2rem', color: 'red' }} />
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept=".svg, .png, .jpg, .gif"
                onChange={handleFileChange} 
              />
            </div>
            <p>
              <span style={{ color: 'red', fontWeight: 'bold' }}>Click to Upload</span> or drag and drop <br />
              SVG, PNG, JPG OR GIF (max. 800 X 400px)
            </p>
            {file && (
              <p>
                Selected File: {file.name} 
              </p>
            )}
          </div>
          <Form.Group className="mb-3" controlId="owner_emirate">
            <Form.Label>Owner Emirates ID</Form.Label>
            <Form.Control
              type="text"
              name="owner_emirate"
              value={formData.tradeLicence}
              onChange={handleChange}
              placeholder="Enter Your Owner Emirates ID Here"
              required
              style={{ background: '#d3d3d30f' }} 

            />
          </Form.Group>
          <Row className="mb-3">
            <Col md={6}>
              <div className="text-center" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                <p className="mb-1">Note: Upload Your Owner Emirated ID</p>
                <div
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '50%',
                    padding: '10px',
                    width: 'fit-content',
                    cursor: 'pointer' 
                  }}
                  onClick={handleUploadClick1} 
                >
                  <AiOutlineCloudUpload style={{ fontSize: '2rem', color: 'red' }} />
                  <input
                    type="file"
                    id="fileInput1"
                    style={{ display: 'none' }}
                    accept=".svg, .png, .jpg, .gif" 
                    onChange={handleFileChange1} 
                  />
                </div>
                <p>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>Click to Upload</span> or drag and drop <br />
                  SVG, PNG, JPG OR GIF (max. 800 X 400px)
                </p>
                {file1 && (
                  <p>
                    Selected File: {file1.name} 
                  </p>
                )}
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                <p className="mb-1">Upload Your Photo Holding Your Emirates ID</p>
                <div
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '50%',
                    padding: '10px',
                    width: 'fit-content',
                    cursor: 'pointer' 
                  }}
                  onClick={handleUploadClick2} 
                >
                  <AiOutlineCloudUpload style={{ fontSize: '2rem', color: 'red' }} />
                  <input
                    type="file"
                    id="fileInput2"
                    style={{ display: 'none' }}
                    accept=".svg, .png, .jpg, .gif" 
                    onChange={handleFileChange2} 
                  />
                </div>
                <p>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>Click to Upload</span> or drag and drop <br />
                  SVG, PNG, JPG OR GIF (max. 800 X 400px)
                </p>
                {file2 && (
                  <p>
                    Selected File: {file2.name}
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="secondary" style={{ width: '120px', height: '40px', marginRight: '10px',color:'red',background:'white'}}>
              Back
            </Button>
            <Button variant="secondary" style={{ width: '120px', height: '40px',color:'white',background:'red' }}>
              Next
            </Button>
          </div>


        </Form>
      </div>
    </Container>
  );
}
