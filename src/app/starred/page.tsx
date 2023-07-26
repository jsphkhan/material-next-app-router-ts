import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function StarredPage() {

  const raw = await fetch('https://reqres.in/api/users');
  const response = await raw.json();

  console.log('resp : ', response);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" gutterBottom>
          Starred Page
        </Typography>
        <ul>
        {response.data.map((user: any) => {
          return (
            <li key={user.id}>
                {user.first_name}
              
            </li>
          );
        })}
      </ul>
      </Box>
    </Container>
  );
}
