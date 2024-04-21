import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/forgot-password', { email });
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      setMessage('Error sending email. Make sure the email is correct and try again.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPasswordForm;
