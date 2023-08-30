import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    padding: 20,
    boxShadow: "0 0 40px rgba(0,0,0,0.3)",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});

const LoginScreen = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLogin = () => {
    const isCorrectCredentials =
      username === "nimo" && password === "nimo-admin"; // This is just a dummy check

    if (!isCorrectCredentials) {
      setSnackbarOpen(true);
      return;
    }

    if (rememberMe) {
      localStorage.setItem("nimo@username", username);
      localStorage.setItem("nimo@password", password);
    }

    // Handle authentication logic here
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          }
          label="Remember me?"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: 20 }}
        >
          Login
        </Button>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          variant="filled"
        >
          The username or password you entered is incorrect. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginScreen;
