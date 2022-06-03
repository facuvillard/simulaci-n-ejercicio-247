import React, { useState } from 'react';
import {
	Table as TableMUI,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
	TablePagination,
} from '@mui/material';

export default function Table({ iterations }) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<TableMUI sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead stickyHeader aria-label="sticky table">
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
							{iterations
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((it) => (
								<TableRow>
									<TableCell>{it.index}</TableCell>
									<TableCell>{it.t.toString()}</TableCell>
									<TableCell>{it.c.toString()}</TableCell>
									<TableCell>{it.K1.toString()}</TableCell>
									<TableCell>{it.K2.toString()}</TableCell>
									<TableCell>{it.K3.toString()}</TableCell>
									<TableCell>{it.K4.toString()}</TableCell>
									<TableCell>{it.nextC.toString()}</TableCell>
									<TableCell>{it.nextT.toString()}</TableCell>
								</TableRow>
							))}
						</TableBody>
					)}
				</TableMUI>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={iterations.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
