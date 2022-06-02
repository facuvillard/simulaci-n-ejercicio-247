import React from 'react';
import { Grid } from '@mui/material';

import './styles.scss';

export default function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12} align="center">
        </Grid>
        <Grid xs={12}>
        </Grid>
        <Grid>
          <p>Enunciado</p>
        </Grid>
      </Grid>
    </div>
  );
}
