import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Chart({ iterations }) {
	return (
		<>
			{iterations.length === 0 ? null : (
				<LineChart width={1000} height={300} data={iterations}>
					<Line type="monotone" dataKey="c" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey="t" />
					<YAxis dataKey="c" />
				</LineChart>
			)}
		</>
	);
}
