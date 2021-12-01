import React from 'react';
import { Container } from '@mui/material';
import LoginCard from '../components/LoginCard';

const containerStyle = {
  height: '694px !important',
  backgroundColor: '#fb8c00',
  margin: '0px',
  paddingTop: 6,
  display: 'flex',
  flexDirection: 'row-reverse',
};
const Login = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        ...containerStyle,
      }}
    >
      <LoginCard />
    </Container>
  );
};

export default Login;
