import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      // .trim removes any white spaces
      newErrors.email = 'Email is required';
      // (!/^[^\s@]+@[^\s@]+\.[^\s@])This is the regrex/ regular expression
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { 
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validateForm()) {
      // Check credentials against stored users
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        u => u.email === formData.email && u.password === formData.password
      );
      
      if (user) {
        // Create session (in a real app, you'd get a token from the server)
        const authData = {
          id: user.id,
          email: user.email,
          name: user.name,
          token: `fake-jwt-token-${Date.now()}`
        };
        
        localStorage.setItem('currentUser', JSON.stringify(authData));
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        setLoginError('Invalid email or password');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {loginError && <div className="login-error">{loginError}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <button type="submit" className="submit-btn">Login</button>
      </form>
      
      <p className="auth-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;