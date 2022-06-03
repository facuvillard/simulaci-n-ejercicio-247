import React from 'react';
import {
	Table as TableMUI,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from '@mui/material';

export default function Table({ iterations }) {
	return (
		<TableContainer component={Paper}>
			<TableMUI sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead stickyHeader>
					<TableRow>
						<TableCell> Iteración </TableCell>
						<TableCell> t </TableCell>
						<TableCell> c </TableCell>
						<TableCell> k1 </TableCell>
						<TableCell> k2 </TableCell>
						<TableCell> k3 </TableCell>
						<TableCell> k4 </TableCell>
						<TableCell> c(i+1) </TableCell>
						<TableCell> t(i+1) </TableCell>
					</TableRow>
				</TableHead>
				{iterations.length === 0 ? null : (
					<TableBody>
						{iterations.map((it) => (
							<TableRow>
								<TableCell>{it.index}</TableCell>
								<TableCell>{it.t}</TableCell>
								<TableCell>{it.c}</TableCell>
								<TableCell>{it.K1}</TableCell>
								<TableCell>{it.K2}</TableCell>
								<TableCell>{it.K3}</TableCell>
								<TableCell>{it.K4}</TableCell>
								<TableCell>{it.nextC}</TableCell>
								<TableCell>{it.nextT}</TableCell>
							</TableRow>
						))}
					</TableBody>
				)}
			</TableMUI>
		</TableContainer>
	);
}
