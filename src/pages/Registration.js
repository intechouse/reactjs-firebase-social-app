import React from 'react';
import { Container } from '@mui/material';
import RegistrartionCard from '../components/RegistrartionCard';
import img from '../assets/images/img.png';

const containerStyle = {
  height: '694px !important',
  backgroundColor: '#fb8c00',
  margin: '0px',
  paddingTop: 6,
  display: 'flex',
  flexDirection: 'row-reverse',
};

const Registration = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        ...containerStyle,
      }}
    >
      <RegistrartionCard />
      <Container
        sx={{
          backgroundColor: 'purple',
          diplay: 'flex',
          flexWrap: 'wrap',
          width: '800px',
          height: '600px',
          marginLeft: '30px',
          //backgroundImage: `url(${img})`,
        }}
      ></Container>
    </Container>
  );
};

export default Registration;
