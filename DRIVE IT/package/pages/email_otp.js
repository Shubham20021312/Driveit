// pages/signin.js
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold OTP digits

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(''); // Join array elements into a single string
    console.log('Entered OTP:', enteredOtp);
    // Add your OTP validation logic or API call here
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 no-border d-flex flex-column flex-md-row" style={{ width: '100%', maxWidth: '929px', height: '401.5px', color:'rgba(255, 255, 255, 1)'}}>
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
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{color:'#202126',fontWeight:'700',fontSize:'20px'}}>OTP Verification</h3>
              <p style={{color:'#999CA1',fontWeight:'400',fontSize:'16px'}}>Enter the code from the sms we<br></br>sent to </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="otpForm">
                  <div className="d-flex">
                    {otp.map((digit, index) => (
                      <Form.Control
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="otp-input"
                        style={{ width: '40px', marginRight: '15px' ,background: '#F7F7F9'}}
                      />
                    ))}
                  </div>
                </Form.Group>
                <p style={{color:'rgba(82, 86, 94, 1)',fontWeight:'400',fontSize:'14px',marginleft: '60px'}}>Didn’t receive the OTP?<span className='signup'><a href='#' style={{ textDecoration:'none',color:'#D71B22',fontWeight:'600',fontSize:'14px'}}> RESEND</a></span></p>
                <Button variant="danger" type="submit" className="w-75 sig">
                 Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
