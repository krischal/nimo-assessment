import React, { useState, useContext } from "react";
import { Container, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import CheckboxInput from "../../components/FormFields/CheckboxInput";
import TextInput from "../../components/FormFields/TextInput";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
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
    marginTop: "30%",
  },
});

const LoginScreen = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setBottomAlert } = useContext(GlobalContext);
  const { control, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    const { username, password } = data;

    const isCorrectCredentials = username === "nimo" && password === "nimo";
    if (!isCorrectCredentials) {
      setBottomAlert({
        open: true,
        type: false,
        message:
          "The username or password you entered is incorrect. Please try again.",
      });
      return;
    } else {
      navigate("/");
      setLoggedIn(true);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <>
                <TextInput label="Username" {...field} />
                {errors?.username && <span>{errors?.username.message}</span>}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <>
                <TextInput label="Password" type="password" {...field} />
                {errors?.password && <span>{errors?.password.message}</span>}
              </>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginScreen;
