const axios = require('axios');
const inquirer = require('inquirer');

// PROMISE CHAIN
// axios.get(`http://www.omdbapi.com/?apikey=a48c3203&t=interstellar`).then((response) => {
// 	console.log('POMISE CHAIN: ', response.data);
// });

// ASYNC AWAIT
const getMovie = async (movie) => {
	try {
		const response = await axios.get(`http://www.omdbapi.com/?apikey=a48c3203&t=${movie}`);
		console.log('ASYNC AWAIT: ', response.data);
	} catch (error) {
		console.log(error);
	}
};

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Search for a movie:',
			name: 'movie'
		}
	])
	.then((response) => {
		getMovie(response.movie);
	});
