import React from 'react';
import Title from'../title/Title';
import Subtitle from'../subtitle/Subtitle';
import { Grid } from '@mui/material';

import './styles.scss';

export default function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12} align="center">
          <Title> Simulación - Ejercicio 247 </Title>
        </Grid>
        <Grid xs={12}>
          <Subtitle> Enunciado </Subtitle>
        </Grid>
        <Grid>
          <p>
            Una central telefónica cuenta con 8 líneas hacia el exterior. Varios internos intentan tomar la línea con una
            frecuencia de 1 cada 90 +/- 30 seg. Las llamadas tienen una duración de 5 +/- 1 minuto. <br/>
            Los internos que no logran tomar la línea vuelven a intentar luego de un lapso de 2 +/- 1 minuto.
            Simular durante 8 horas, calculando:<br/>
            Promedio de Tiempo de cada llamada (a partir de que logra comunicarse).<br/>
            Promedio de Tiempo Total (desde el primer intento hasta que deja de hablar).<br/>
            Promedio de Cantidad de intentos de toma de línea de cada llamada.<br/>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
