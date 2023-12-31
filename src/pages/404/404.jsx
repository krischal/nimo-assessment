import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import pageNotFoundAnimation from "../../assets/lotties/Error404.json";
import Lottie from "lottie-react";
const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});

const Page404 = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.contentContainer}>
        <Lottie animationData={pageNotFoundAnimation} />
      </div>
    </Container>
  );
};

export default Page404;
