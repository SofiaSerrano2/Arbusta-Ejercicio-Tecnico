import axios from 'axios';
const baseUrl = 'http://localhost:3001/navBar';

const getNavBar = ()=>{
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
}

export default { getNavBar};
