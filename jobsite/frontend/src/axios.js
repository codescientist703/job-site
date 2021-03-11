import axios from 'axios';

const baseURL =
	process.env.NODE_ENV.toLowerCase() === 'development'
		? 'http://127.0.0.1:8000/api/'
		: 'http://159.89.167.226/api/';

const instance = axios.create({
	baseURL: baseURL,
});

export default instance;
