const calculateK1 = (c, k, Q, F, V) => {
	return -((k * (Math.pow(c, 2)))) - ((Q * c) / V) + (F / V);
};

const calculateK2 = (c, k, Q, F, V, h, K1) => {
	const c2 = c + ((h / 2) * K1);
	return -((k * (Math.pow(c2, 2)))) - ((Q * c2) / V) + (F / V);
};

const calculateK3 = (c, k, Q, F, V, h, K2) => {
	const c3 = c + ((h / 2) * K2);
	return -((k * (Math.pow(c3, 2)))) - ((Q * c3) / V) + (F / V);
};

const calculateK4 = (c, k, Q, F, V, h, K3) => {
	const c4 = c + (h * K3);
	return -((k * (Math.pow(c4, 2)))) - ((Q * c4) / V) + (F / V);
};

const calculateNextConcentration = (c, h, K1, K2, K3, K4) => {
	return c + (h / 6) * (K1 + K2 + K3 + K4);
};

const calculateNextT = (h, t) => {
	return t + h;
};

module.exports = {
	calculateK1,
	calculateK2,
	calculateK3,
	calculateK4,
	calculateNextConcentration,
	calculateNextT,
};
