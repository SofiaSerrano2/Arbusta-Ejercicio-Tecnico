import axios from 'axios';
const baseUrl = 'http://localhost:3001/socialMedia';

const getSocialMedia = ()=>{
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
}

export default { getSocialMedia};
