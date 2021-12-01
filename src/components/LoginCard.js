import React from 'react';
import { Card, TextField, Box, Button, Container } from '@mui/material';
import {
  AccountCircle,
  LoginTwoTone,
  VpnKeySharp,
  Person,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const cardStyle = {
  width: 470,
  height: 600,
  backgroundColor: '#140f0a',
  borderBottomLeftRadius: 90,
  borderTopRightRadius: 90,
};

export default function LoginCard() {
  return (
    <Card
      sx={{
        ...cardStyle,
      }}
    >
      {/* Upperpart */}
      <Card
        sx={{
          width: 170,
          height: 100,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginLeft: 13,
          marginTop: 4,
          display: 'flex',
        }}
      >
        <Person sx={{ width: 80, height: 80, color: '#fb8c00' }} />
        {
          <span style={{ fontSize: '24px', marginTop: 32, color: '#fb8c00' }}>
            Login
          </span>
        }
      </Card>
      {/* login box */}
      <Box sx={{ marginTop: 3, marginRight: 14 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            marginLeft: 5,
          }}
        >
          <AccountCircle
            sx={{ width: 40, height: 40, color: '#fb8c00', mr: 1, my: 0.5 }}
          />
          <TextField
            fullWidth
            label='User Name'
            variant='standard'
            InputLabelProps={{ style: { color: '#fb8c00' } }}
            InputProps={{
              style: { color: '#fb8c00' },
            }}
            sx={{ marginRight: 3 }}
          />
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            alignItems: 'flex-end',
            marginLeft: 5,
          }}
        >
          <VpnKeySharp
            sx={{ width: 40, height: 40, color: '#fb8c00', mr: 1, my: 0.5 }}
          />
          <TextField
            fullWidth
            type='password'
            label='Password'
            variant='standard'
            InputLabelProps={{ style: { color: '#fb8c00' } }}
            InputProps={{
              style: { color: '#fb8c00' },
            }}
            sx={{ borderColor: 'green', marginRight: 3 }}
          />
        </Box>
      </Box>
      {/* Login button and text container */}
      <Container
        sx={{
          height: 40,
          p: '0px !important',
          marginTop: '40px',
          //backgroundColor: 'purple',
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row-reverse',
        }}
      >
        <Button
          sx={{
            marginRight: '88px',
            backgroundColor: '#fb8c00',
            color: '#140f0a',
            borderTopLeftRadius: '30px',
            borderBottomRightRadius: '30px',
            ':hover': {
              bgcolor: '#fb8200',
            },
          }}
          variant='contained'
          endIcon={<LoginTwoTone sx={{}} />}
        >
          <b> LogIN</b>
        </Button>
        {
          <span style={{ marginRight: '40px' }}>
            <b style={{ color: '#fb8c00' }}>
              Don't have an account?
              <br />
              <Button
                component={Link}
                to='/registration'
                sx={{
                  textTransform: 'none',
                  padding: '0px',
                  color: '#fb8c00',
                  ':hover': {
                    bgcolor: 'transparent',
                  },
                }}
              >
                <b>Create account</b>
              </Button>
            </b>
          </span>
        }
      </Container>
    </Card>
  );
}
