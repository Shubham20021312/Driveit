import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaRegFilePdf } from 'react-icons/fa';

export default function Agreement() {

  const [file1, setFile1] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-75 p-4 rounded mt-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
        <h5 className="mb-4">Agreement Page</h5>
        <Form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className='card' style={{ borderRadius: '8px', border: '1px solid rgba(238, 239, 244, 1)' }}>
              <p style={{ margin: '10px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <br />
            <Form.Check
              type="checkbox"
              id="termsCheckbox"
              className={['custom-checkbox']}
              label={
                <>
                  You agree to our friendly <span style={{ color: 'red' }}>Agreements.</span>
                </>
              }
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="secondary" style={{ width: '120px', height: '48px', color: 'rgba(215, 27, 34, 1)', backgroundColor: 'rgba(255, 255, 255, 1)', border: '1px solid rgba(226, 226, 227, 1)', borderRadius: '12px', fontWeight: '500', fontSize: '16px', lineHeight: '19.2px', }}>
              Back
            </Button>
            <Button variant="secondary" style={{ width: '120px', height: '48px', color: 'rgba(255, 255, 255, 1)', backgroundColor: 'rgba(215, 27, 34, 1)', borderRadius: '12px', marginLeft: '24px', fontWeight: '500', fontSize: '16px', lineHeight: '19.2px', border: 'none' }}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
