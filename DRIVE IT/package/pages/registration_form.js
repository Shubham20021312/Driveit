// pages/signin.js
import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 no-border">
        <div className="row g-0">
          <div className="col-md-4 col-12 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img src="car1.png" alt="Sign In" className="img-fluid rounded-start car1" />
              <h4 className="mt-3">Ride your dreams</h4>
              <p className="mt-2" style={{ color: "#999CA1" }}>We provide the best car options and expert services for the greatest customer experience</p>
            </div>
          </div>
          <div className="col-md-1 d-flex align-items-center justify-content-center">
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{color:'rgba(32, 33, 38, 1)',lineHeight:'32px',fontSize:'20px',fontWeight:'600'}}>Create your Drive it Account</h3>
              <p className='already'>Already have an account? <span className='signup'><a href='#' className='sign1'>Sign in</a></span></p>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName" className='sign-up'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter Your First Name"
                        required
                        className="no-border"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName" className='sign-up'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Your Last Name"
                        required
                        className="no-border"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="email" className='sign-up'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className="no-border"
                  />
                </Form.Group>
                <Form.Group controlId="username" className='sign-up'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter Your Username"
                    required
                    className="no-border"
                  />
                </Form.Group>
                <Form.Group controlId="password" className='sign-up'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    required
                    className="no-border"                   
                  />
                </Form.Group>
                <Form.Group controlId="confirmPassword" className="mb-3 sign-up">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Your Password"
                    required
                    className="no-border"
                    style={{ background: '#d3d3d30f' }} 
                  />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100 sig">
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
