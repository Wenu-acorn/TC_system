import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './password.css';  // Import the CSS file

function Password() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Password reset requested for:', email);
    navigate('/login');
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="password-container">
      <div className="password-form">
        <h2 className="password-title">Reset Password</h2>
        <p className="password-subtitle">
          Enter your email to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Reset Password
          </button>
        </form>
        
        <button onClick={handleBack} className="back-button">
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Password;
