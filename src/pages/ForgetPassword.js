import React from "react";
import { Container } from "@mui/material";
import ForgetPasswordCard from "../components/ForgetPasswordCard";
const containerStyle = {
  height: "100vh",
  backgroundColor: "#fb8c00",
  // margin: "0px",
  paddingTop: 6,
  paddingBottom: 6,
  display: "flex",
  flexDirection: "row-reverse",
};
const ForgetPassword = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        ...containerStyle,
      }}
    >
      <ForgetPasswordCard />
    </Container>
  );
};

export default ForgetPassword;
