import React from "react";
import { Card, TextField, Box, Button, Container } from "@mui/material";
import {
  AccountCircle,
  LoginTwoTone,
  VpnKeySharp,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const cardStyle = {
  width: 370,
  // height: 600,
  backgroundColor: "#140f0a",
  borderBottomLeftRadius: 90,
  borderTopRightRadius: 90,
};

export default function ForgetPasswordCard() {
  return (
    <Card
      sx={{
        ...cardStyle,
        mx: "auto",
        textAlign: "center",
        padding: "3rem 2rem 3rem 2rem",
      }}
      style={{ textAlign: "center" }}
    >
      {/* Upperpart */}
      <Card
        sx={{
          // width: 170,
          // height: 100,
          backgroundColor: "transparent",
          boxShadow: "none",
          // marginLeft: 13,
          // marginTop: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Person sx={{ width: 50, height: 50, color: "#fb8c00" }} />
        {
          <span
            style={{ fontSize: "24px", color: "#fb8c00", marginTop: "18px" }}
          >
            Login
          </span>
        }
      </Card>
      {/* login box */}
      <Box sx={{ marginTop: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            // marginLeft: 5,
          }}
        >
          <AccountCircle
            sx={{ width: 40, height: 40, color: "#fb8c00", mr: 1, my: 0.5 }}
          />
          <TextField
            fullWidth
            label="User Name"
            variant="standard"
            InputLabelProps={{ style: { color: "#fb8c00" } }}
            InputProps={{
              style: { color: "#fb8c00" },
            }}
            // sx={{ marginRight: 3 }}
          />
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            alignItems: "flex-end",
            // marginLeft: 5,
          }}
        >
          <VpnKeySharp
            sx={{ width: 40, height: 40, color: "#fb8c00", mr: 1, my: 0.5 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="standard"
            InputLabelProps={{ style: { color: "#fb8c00" } }}
            InputProps={{
              style: { color: "#fb8c00" },
            }}
            sx={{ borderColor: "green", marginRight: 3 }}
          />
        </Box>
      </Box>
      {/* Login button and text container */}
      <Container
        sx={{
          // height: 40,
          // p: "0px !important",
          marginTop: "50px",
          //backgroundColor: 'purple',
          // display: "flex",
          // flexWrap: "nowrap",
          // flexDirection: "row-reverse",
        }}
      >
        <Button
          sx={{
            // marginRight: "88px",
            backgroundColor: "#fb8c00",
            color: "#140f0a",
            borderTopLeftRadius: "30px",
            borderBottomRightRadius: "30px",
            ":hover": {
              bgcolor: "#fb8200",
            },
          }}
          variant="contained"
          endIcon={<LoginTwoTone sx={{}} />}
        >
          <b> LogIN</b>
        </Button>
      </Container>
      <Container sx={{ marginTop: 3 }}>
        {
          <span>
            <b style={{ color: "#fb8c00" }}>
              Don't have an account?
              <Button
                component={Link}
                to="/registration"
                sx={{
                  textTransform: "none",
                  padding: "0px",
                  color: "#fb8c00",
                  ":hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                &nbsp;&nbsp;
                <b>
                  <a href="#">Login</a>
                </b>
              </Button>
            </b>
          </span>
        }
      </Container>
    </Card>
  );
}
