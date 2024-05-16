import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextAPI/useAuth";

import { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: 'admin',
    password: 'admin'
  })

  const [error, setError] = useState('')

  const handleChange= (e) => {
    setCredentials({
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${import.meta.env.BASE_API_URL}/login`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({credentials})
      })

      if(res.ok) {
        login().then(() => {
          navigate(state?.path || "/dashboard");
        });
      }
    }
    catch(error) {
      setError(error)
      throw new Error('Login failed!')
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 7}}>
    <Typography variant="h4" align="center" gutterBottom>
      Log In
    </Typography>
    <form >
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name='email'
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name='password'
        fullWidth
        margin="normal"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth >
        Login
      </Button>
    </form>
    {error && <div className="error">{error}</div>}
  </Container>
  );
};

export default Login