import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Chart({ iterations }) {
	return (
		<>
			{iterations.length === 0 ? null : (
				<LineChart
					width={600}
					height={300}
					data={iterations}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line type="monotone" dataKey="c" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="t" />
					<YAxis />
				</LineChart>
			)}
		</>
	);
}
