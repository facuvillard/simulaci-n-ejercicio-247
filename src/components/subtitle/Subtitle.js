import React from 'react';
import { Typography } from '@mui/material';

export default function Subtitle(props) {
	return (
		<Typography variant='h4'> {props.children} </Typography>
	)
}
