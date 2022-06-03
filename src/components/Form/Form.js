import React from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';

export default function Form({ params, setParams, startIteration }) {
	const handleOnChange = (e) => {
		const { id, value } = e.target;
		setParams({ ...params, [id]: value });
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography type="number" variant="h4">
					Parámetros
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<TextField
					type="number"
					fullWidth
					id="F"
					label="Flujo másico (F)"
					value={params.F}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<TextField
					type="number"
					fullWidth
					id="V"
					label="Volumen (V)"
					value={params.V}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<TextField
					type="number"
					fullWidth
					id="Q"
					label="Flujo volumétrico (Q)"
					value={params.Q}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<TextField
					type="number"
					fullWidth
					id="k"
					label="Flujo de reaccion de segundo orden (k)"
					value={params.k}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					fullWidth
					id="cInicial"
					label="Concentración inicial (c(0))"
					value={params.cInicial}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					fullWidth
					id="h"
					label="Paso por iteración (h)"
					value={params.h}
					onChange={handleOnChange}
				/>
			</Grid>
			<Grid item xs={12} alignContent="right">
				<Button variant="contained" onClick={startIteration}>
					Comenzar iteraciones
				</Button>
			</Grid>
		</Grid>
	);
}
