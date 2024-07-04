// pages/signin.js
import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

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
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 no-border d-flex flex-column flex-md-row" style={{ width: '100%', maxWidth: '867px', color:'rgba(255, 255, 255, 1)'}}>
        <div className="col-md-5 d-flex align-items-center justify-content-center flex-column">
          <img src="car1.png" alt="Sign In" className="img-fluid rounded-start car1"/>
          <div className="text-center">
            <h4 className="mt-3" style={{color:'rgba(47, 49, 54, 1)',fontWeight:'700',fontSize:'20px'}}>Ride your dreams</h4>
            <p className="mt-2" style={{ color: "rgba(153, 156, 161, 1)",fontSize:'14px',fontWeight:'400' }}>We provide the best car options and expert services for the greatest customer experience.</p>
          </div>
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-center">
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card-body">
            <h3 className="card-title mb-4" style={{color:'rgba(32, 33, 38, 1)',fontSize:'20px',lineHeight:'32px',fontWeight:'700',height:'32px'}}>Sign in Form</h3>
            <p className='signup'>Don’t have an account? <span className='signup'><a href='#' className='sign1'>Sign up</a></span></p>
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="username" className='sign-up'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      placeholder="Enter Your Username Here"
                      required
                      className="no-border"
                      style={{ backgroundColor: 'rgba(247, 247, 249, 1)',width: '341px',height: '44px',borderRadius:'8px',gap:'16px',padding:'10px, 20px, 10px, 20px' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="password" className='sign-up'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Enter Your password Here"
                      required
                      className="no-border"
                      style={{ backgroundColor: 'rgba(247, 247, 249, 1)',width: '341px',height: '44px' }}
                    />
                  </Form.Group>
                </Col>
              </div>
              <Button variant="danger" type="submit" className="w-100 sig">
                Sign In
              </Button>
              <Form.Text>
                <a href="#" style={{ float: 'right', marginTop: '10px', lineHeight: '20px', color: 'rgba(215, 27, 34, 1)', fontWeight: '600', textDecoration: 'none' }}>Forgot password?</a>
              </Form.Text>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
