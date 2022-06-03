import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Form from './Form/Form';
import Table from './Table/Table';
import Chart from './/Chart/Chart';

import {
	calculateK1,
	calculateK2,
	calculateK3,
	calculateK4,
	calculateNextConcentration,
	calculateNextT,
} from '../utils/calculations';

import './styles.scss';

export default function App() {
	const [params, setParams] = useState({
		t: 0,
		V: 10,
		F: 200,
		Q: 1,
		k: 0.1,
		cInicial: 0,
		h: 0.5,
	});

	const [iterations, setIterations] = useState([]);

	const startIteration = async () => {
    await setIterations([])
    const arrayIterations = []
		let index = 0;
		let t = params.t;
		let c = params.cInicial;
		let k1 = calculateK1(c, params.k, params.Q, params.F, params.V);
		let k2 = calculateK2(c, params.k, params.Q, params.F, params.V, params.h, k1);
		let k3 = calculateK3(c, params.k, params.Q, params.F, params.V, params.h, k2);
		let k4 = calculateK4(c, params.k, params.Q, params.F, params.V, params.h, k3);
		let nextC = calculateNextConcentration(c, params.h, k1, k2, k3, k4);
		let nextT = calculateNextT(params.h, t);
		let iteration = {
			index: index,
			t: t,
			c: c,
			K1: k1,
			K2: k2,
			K3: k3,
			K4: k4,
			nextC: nextC,
			nextT: nextT,
		};
    arrayIterations.push(iteration)
    console.log(iteration)
		for (let i = 0; i < 2000; i++) {
			index++;
			t = nextT;
			c = nextC;
			k1 = calculateK1(c, params.k, params.Q, params.F, params.V);
			k2 = calculateK2(c, params.k, params.Q, params.F, params.V, params.h, k1);
			k3 = calculateK3(c, params.k, params.Q, params.F, params.V, params.h, k2);
			k4 = calculateK4(c, params.k, params.Q, params.F, params.V, params.h, k3);
			nextC = calculateNextConcentration(c, params.h, k1, k2, k3, k4);
			nextT = calculateNextT(params.h, t);
      iteration = {
        index: index,
        t: t,
        c: c,
        K1: k1,
        K2: k2,
        K3: k3,
        K4: k4,
        nextC: nextC,
        nextT: nextT,
      };
      arrayIterations.push(iteration)
      console.log(iteration)
		}
    await setIterations(arrayIterations);
	};

	return (
		<div className="app">
			<Grid container spacing={0}>
				<Grid item xs={12} align="center">
					<Typography variant="h1"> Simulación ejercicio 150 </Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h7">
						Un balance de masa para un químico en un reactor completamente mezclado puede escribirse como:{' '}
						<br />
						<img src={require('../img/EDO.jpg')} alt="EDO" /> <br />
						Donde V = volumen (10m3), c = concentración, F = flujo másico (200g/min.), Q = flujo
						volumétrico (1m3/min.) y k = flujo de reacción de segundo orden (0.1m3/g/min.). Si c(0) = 0 ,
						resolver la EDO hasta que la concentración alcance un nivel estable utilizando el método de
						Runge-Kutta de cuarto orden. Graficar los resultados.
					</Typography>
				</Grid>
			</Grid>
			<div className="separator" />
			<Form params={params} setParams={setParams} startIteration={startIteration} />
			<div className="separator" />
			<Table iterations={iterations} />
			<div className="separator" />
			<Chart iterations={iterations} />
		</div>
	);
}
