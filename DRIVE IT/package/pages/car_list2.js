import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai'; 


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
    EngineCapacity:'',
    transmission:'',
    cylinder:'',
    seat:'',
    Fueltype:'',
    chauffeurHours:'',
    year:'',
    city:'',
    mulkiya:'',

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

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
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
                    <option value="" style={{color:'red'}}>Select Category</option>
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
                <Form.Group controlId="EngineCapacity" className='sign-up with-icon'>
                  <Form.Label><span className="material-icons icon-circle">engineering</span>Engine Capacity</Form.Label>
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
              <Form.Group controlId="transmission" className='sign-up with-icon'>
                  <Form.Label> <span className="material-icons icon-circle">settings_ethernet</span>Transmission</Form.Label>
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
              <Form.Group controlId="kilometre" className='sign-up with-icon'>
                  <Form.Label> <span className="material-icons icon-circle">speed</span>Kilometre</Form.Label>
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
                <Form.Group controlId="cylinder" className='sign-up with-icon'>
                  <Form.Label>
                    <span className="material-icons icon-circle">power</span>
                      Cylinder
                  </Form.Label>
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
              <Form.Group controlId="seat" className='sign-up with-icon'>
                  <Form.Label>
                    <span className="material-icons icon-circle">event_seat</span>
                    Seat
                  </Form.Label>
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
              <Form.Group controlId="Fueltype" className='sign-up with-icon'>
                  <Form.Label> <span className="material-icons icon-circle">local_gas_station</span>Fuel Type</Form.Label>
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

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="chauffeurHours" className='sign-up with-icon'>
                  <Form.Label>
                    <span className="material-icons icon-circle">access_time</span>
                    Chauffeur hours
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="chauffeurHours"
                    value={formData.chauffeurHours}
                    onChange={handleChange}
                    placeholder="Enter Your Chauffeur Hours Here"
                    required
                    className="no-border"
                    style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="year" className='sign-up with-icon'>
                <Form.Label>
                  <span className="material-icons icon-circle">event</span>
                  Year
                </Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Enter Your Year Here"
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                />
            </Form.Group>

              </Col>
              <Col md={4}>
              <Form.Group controlId="selectCity" className='sign-up with-icon'>
                <Form.Label>
                  <span className="material-icons icon-circle">location_city</span>
                  Select City
                </Form.Label>
                <Form.Select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="no-border"
                  style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', padding: '10px' }}
                >
                  <option value="">Select Your City</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="dubai">Dubai</option>
                  <option value="sharjah">Sharjah</option>
                  <option value="ajman">Ajman</option>
                  <option value="fujairah">Fujairah</option>
                  <option value="ras-al-khaimah">Ras al-Khaimah</option>
                  <option value="umm-al-qaiwain">Umm al-Qaiwain</option>
                </Form.Select>
              </Form.Group>
              </Col>
            </Row>

            <hr style={{border:'1px solid rgba(238, 239, 244, 1)'}}></hr>
            
            <Form.Group className="mb-3 sign-up" controlId="mulkiya"> 
            <Form.Label>Mulkiya</Form.Label>
            <Form.Control
              type="text"
              name="mulkiya"
              value={formData.mulkiya}
              onChange={handleChange}
              placeholder="Enter mulkiya"
              required
              className="no-border"
              style={{ backgroundColor: 'rgba(247, 247, 249, 1)', height: '44px', borderRadius: '8px', gap: '16px', padding: '10px 20px' }}
            />
          </Form.Group>
          <div className="text-center mb-3" style={{ border: '1px solid rgba(234, 236, 240, 1)', borderRadius: '8px', padding: '16px', minHeight: '180px' }}>
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
            <p style={{color:'rgba(102, 112, 133, 1)',fontSize:'14px',fontWeight:'400'}}>
              <span style={{ color: 'rgba(215, 27, 34, 1)', fontWeight: '600',fontSize:'14px' }}>Uplaod Your Mulkiya</span> or drag and drop <br />
                SVG, PNG, JPG OR GIF (max. 800 X 400px)
            </p>
            {file && (
              <p>
                Selected File: {file.name} 
              </p>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="secondary" style={{ width: '120px', height: '48px',color:'rgba(215, 27, 34, 1)',backgroundColor:'rgba(255, 255, 255, 1)',border:'1px solid rgba(226, 226, 227, 1)',borderRadius:'12px',fontWeight:'500',fontSize:'16px',lineHeight:'19.2px',}}>
              Back
            </Button>
            <Button variant="secondary" style={{ width: '120px', height: '48px',color:'rgba(255, 255, 255, 1)',backgroundColor:'rgba(215, 27, 34, 1)',borderRadius:'12px',marginLeft:'24px',fontWeight:'500',fontSize:'16px',lineHeight:'19.2px',border:'none'}}>
             Submit
            </Button>
          </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HorizontalDivs;
