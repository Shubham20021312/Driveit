import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const HorizontalDivs = () => {
  const [formData, setFormData] = useState({
    trafficPlatenumber: '',
    chassisNo: '',
    category: '',
    color:'',
    InteriorColor:'',
    deposit:'',
    RentPerDay:'',
    kmPerDay:'',
    RentPerWeek:'',
    kmPerWeek:'',
    RentPerMonth:'',
    kmPerMonth:'',
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
    <div style={{ margin: '10px',backgroundColor:'rgba(247, 247, 249, 1)'}}>
      <h3 style={{fontWeight:'700',fontSize:'24px', padding: '20px'}}>List you car</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)', margin: '10px', padding: '20px', borderRadius: '8px' }}>
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

            <Form.Group controlId="deposit" className='sign-up'>
              <Form.Label>Deposit</Form.Label>
              <Form.Control
                type="text"
                name="deposit"
                value={formData.deposit}
                onChange={handleChange}
                placeholder="Enter deposit"
                required
                className="no-border"
                style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="RentPerDay" className='sign-up'>
                  <Form.Label>Rent per day</Form.Label>
                  <Form.Control
                    type="text"
                    name="RentPerDay"
                    value={formData.RentPerDay}
                    onChange={handleChange}
                    placeholder="Enter Rent Per Day"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="kmPerDay" className='sign-up'>
                  <Form.Label>Km per day</Form.Label>
                  <Form.Control
                    type="text"
                    name="kmPerDay"
                    value={formData.kmPerDay}
                    onChange={handleChange}
                    placeholder="Enter km Per Day"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="RentPerWeek" className='sign-up'>
                  <Form.Label>Rent per Week</Form.Label>
                  <Form.Control
                    type="text"
                    name="RentPerWeek"
                    value={formData.RentPerWeek}
                    onChange={handleChange}
                    placeholder="Enter Rent Per Week"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="kmPerWeek" className='sign-up'>
                  <Form.Label>Km per Week</Form.Label>
                  <Form.Control
                    type="text"
                    name="kmPerWeek"
                    value={formData.kmPerWeek}
                    onChange={handleChange}
                    placeholder="Enter km Per Week"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="RentPerMonth" className='sign-up'>
                  <Form.Label>Rent per Month</Form.Label>
                  <Form.Control
                    type="text"
                    name="RentPerMonth"
                    value={formData.RentPerMonth}
                    onChange={handleChange}
                    placeholder="Enter Rent Per Month"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="kmPerMonth" className='sign-up'>
                  <Form.Label>Km per Month</Form.Label>
                  <Form.Control
                    type="text"
                    name="kmPerMonth"
                    value={formData.kmPerMonth}
                    onChange={handleChange}
                    placeholder="Enter km Per Month"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)', margin: '10px', padding: '20px', borderRadius: '8px' }}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="EngineCapacity" className='sign-up'>
                  <Form.Label>Engine Capacity</Form.Label>
                  <Form.Control
                    type="text"
                    name="EngineCapacity"
                    value={formData.EngineCapacity}
                    onChange={handleChange}
                    placeholder="Enter Your Engine Capacity Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="transmission" className='sign-up'>
                  <Form.Label>Transmission</Form.Label>
                  <Form.Control
                    type="text"
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    placeholder="Enter Your transmission Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="kilometre" className='sign-up'>
                  <Form.Label>Kilometre</Form.Label>
                  <Form.Control
                    type="text"
                    name="kilometre"
                    value={formData.kilometre}
                    onChange={handleChange}
                    placeholder="Enter Your Kilometre Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="cylinder" className='sign-up'>
                  <Form.Label>Cylinder</Form.Label>
                  <Form.Control
                    type="text"
                    name="cylinder"
                    value={formData.cylinder}
                    onChange={handleChange}
                    placeholder="Enter Your Cylinder Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="seat" className='sign-up'>
                  <Form.Label>Seat</Form.Label>
                  <Form.Control
                    type="text"
                    name="seat"
                    value={formData.seat}
                    onChange={handleChange}
                    placeholder="Enter Your Seat Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="Fueltype" className='sign-up'>
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="Fueltype"
                    value={formData.Fueltype}
                    onChange={handleChange}
                    placeholder="Enter Your Fuel Type Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HorizontalDivs;
