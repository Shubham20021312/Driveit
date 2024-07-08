import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const HorizontalDivs = () => {
  const [formData, setFormData] = useState({
    trafficPlatenumber: '',
    chassisNo: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, backgroundColor: 'rgba(238, 239, 244, 1)', margin: '10px', padding: '20px', borderRadius: '8px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 sign-up" controlId="trafficPlatenumber">
            <Form.Label>Traffic plate number</Form.Label>
            <Form.Control
              type="text"
              name="trafficPlatenumber"
              value={formData.trafficPlatenumber}
              onChange={handleChange}
              placeholder="Enter Car number plate here"
              required
              className="no-border"
              style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="chassisNo" className='sign-up'>
                <Form.Label>Chassis no.</Form.Label>
                <Form.Control
                  type="text"
                  name="chassisNo"
                  value={formData.chassisNo}
                  onChange={handleChange}
                  placeholder="Enter Your Chassis Number Here"
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="category" className='sign-up'>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                >
                  <option value="">Select Category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="color" className='sign-up'>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Enter Color Here"
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="InteriorColor" className='sign-up'>
                <Form.Label>Interior Color</Form.Label>
                <Form.Control
                  type="text"
                  name="InteriorColor"
                  value={formData.InteriorColor}
                  onChange={handleChange}
                  placeholder="Enter Interior Color Here"
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="deposit" className='sign-up'>
                <Form.Label>Deposit</Form.Label>
                <Form.Control
                  type="text"
                  name="deposit"
                  value={formData.deposit}
                  onChange={handleChange}
                  placeholder="Enter deposit "
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="rentPerDay" className='sign-up'>
                <Form.Label>Rent per day</Form.Label>
                <Form.Control
                  type="text"
                  name="rentPerDay"
                  value={formData.rentPerDay}
                  onChange={handleChange}
                  placeholder="Enter Rent Per Day"
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
      <div style={{ flex: 1, backgroundColor: 'lightgreen', height: '200px', margin: '10px' }}>
        {/* Content for the second div */}
      </div>
    </div>
  );
};

export default HorizontalDivs;
