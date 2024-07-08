import React, { useState } from 'react';
import { Container, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiOutlineCloudUpload, AiOutlineInfoCircle } from 'react-icons/ai';

export default function Register() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Title: ${formData.title}\nFiles:\n1. ${file ? file.name : 'No file selected'}`
    );
    setFormData({
      title: '',
      description: '',
    });
    setFile(null);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{backgroundColor:'black'}}>
        <img src="Frame 196.jpg" alt="info" style={{ width: '100px', height: 'auto' }} />
      </div>
    </Tooltip>
  );
  

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <div className="w-50 p-4 rounded mt-3 mb-3">
        <h5 className="mb-4" style={{ color: '#202126', fontWeight: '700', fontSize: '20px', lineHeight: '32px' }}>List Your Car</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 sign-up" controlId="title"> 
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Your Title Here"
              required
              className="no-border"
              style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', gap: '16px', padding: '10px 20px' }}
            />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Label>Upload Car Photos</Form.Label>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              {({ ref, ...triggerHandler }) => (
                <AiOutlineInfoCircle
                  {...triggerHandler}
                  ref={ref}
                  style={{ fontSize: '1rem', color: 'gray', cursor: 'pointer' }}
                />
              )}
            </OverlayTrigger>
          </div>
          <div className="text-center mb-3" style={{ border: '1px solid rgba(234, 236, 240, 1)', borderRadius: '8px', padding: '12px 16px' }}>
            <p className="mb-1" style={{ color: 'rgba(32, 33, 38, 1)', fontWeight: '500', fontSize: '12px' }}>Note: Upload at least 3 photos front, side and back</p>
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                backgroundColor: '#f5f5f5',
                borderRadius: '50%',
                padding: '10px',
                width: 'fit-content',
                cursor: 'pointer',
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
            <p style={{ color: 'rgba(102, 112, 133, 1)', fontSize: '14px', fontWeight: '400' }}>
              <span style={{ color: 'rgba(215, 27, 34, 1)', fontWeight: '600', fontSize: '14px' }}>Click to upload</span> or drag and drop <br />
              SVG, PNG, JPG OR GIF (max. 800 X 400px)
            </p>
            {file && (
              <p>
                Selected File: {file.name}
              </p>
            )}
          </div>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description Here"
              className="no-border"
            />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button type="submit" variant="secondary" style={{ width: '120px', height: '48px', color: 'rgba(255, 255, 255, 1)', backgroundColor: 'rgba(215, 27, 34, 1)', borderRadius: '12px', marginLeft: '24px', fontWeight: '500', fontSize: '16px', lineHeight: '19.2px', border: 'none' }}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
