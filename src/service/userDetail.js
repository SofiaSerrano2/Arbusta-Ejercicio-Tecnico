import axios from 'axios';
const baseUrl = 'http://localhost:3001/userDetail/1';

const getserviceUserDetail = ()=>{
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
}

export default { getserviceUserDetail};