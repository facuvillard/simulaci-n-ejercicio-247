import { Typography } from "@mui/material";
import React from 'react';


export default function Title(props) {
	return (
		<Typography variant="h1" component="h1">
			{props.children}
		</Typography>
	)
}

