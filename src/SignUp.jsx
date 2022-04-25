import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Form } from "./components/Form";
import Input from "./components/Input";
import { useNavigate } from "react-router-dom";
import LogoTop from "./components/Logo";
import { api } from "./services/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
  
  async function handleSignUp( email, password, passwordConfirm) {
    if (password !== passwordConfirm) return alert("unmatch passwords")
  
    const signUpData = {
      email,
      password,
    };
  
    try {
      await api.createUser(signUpData);
      setPassword('')
      setPasswordConfirm('')
      setEmail('')
      navigate('/')
    } catch (e) {
      if(e.response.status === 409) {
        return alert("email already in use, try again with other email.")
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
      <Input
        type="password"
        label="confirm password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <Button variant="outlined" onClick={() => navigate("/")}>
          já possuo cadastro
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSignUp(email, password, passwordConfirm)}
        >
          cadastrar
        </Button>
      </Box>
    </Form>
  );
}


export default SignUp;
