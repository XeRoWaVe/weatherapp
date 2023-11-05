const url = '/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a90b7381a7msh3a4ab4fe512403dp1ad821jsn285dfc8b5038',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

try {
	const response = await fetch('/cities', geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

export const WEATHER_API_KEY = '4ae8bb826d4aa3211306011611fbbec9'