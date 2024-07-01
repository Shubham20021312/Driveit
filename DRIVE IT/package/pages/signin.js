// pages/signin.js
import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src="car1.png" alt="Sign In" className="img-fluid rounded-start car1" />
              <div className="text-center">
                <h4 className="mt-3">Ride your dreams</h4>
                <p className="mt-2" style={{ color: "#999CA1" }}>We provide the best car options and expert services for the greatest customer experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <div className="vertical-line"></div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title mb-4">Sign in Form</h3>
              <p>Don’t have an account? <span className='signup'><a href='#' className='text-danger'>Sign up</a></span></p>
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Enter Your Username"
                        required
                        style={{ background: '#d3d3d30f' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter Your password"
                        required
                        style={{ background: '#d3d3d30f' }}
                      />
                    </Form.Group>
                  </Col>
                </div>
                <Button variant="danger" type="submit" className="w-100 rounded-pill">
                  Sign In
                </Button>
                <Form.Text className="text-danger">
                  <a href="#" style={{ float: 'right' }} className="text-danger">Forgot password?</a>
                </Form.Text>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
