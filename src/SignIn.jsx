import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Form } from "./components/Form";
import Input from "./components/Input";
import LogoTop from "./components/Logo";
import { useNavigate } from "react-router-dom";
import { api } from "./services/api";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function handleLogin( email, password) {
    const loginData = {
      email,
      password,
    };
  
    try {
      await api.signIn(loginData);
      setPassword('')
      setEmail('')
      navigate('/home')
    } catch (e) {
      if(e.response.status === 401) {
        return alert("invalid credentials.")
      } else {
        alert(e.response.data)
      }
    }
  }

  return (
    <Form>
      <LogoTop />
      <Input
        type="text"
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <Button variant="outlined" onClick={() => navigate("/sign-up")}>
          Criar conta
        </Button>
        <Button
          variant="contained"
          onClick={() => handleLogin(email, password)}
        >
          Entrar
        </Button>
      </Box>
    </Form>
  );
}


export default SignIn
