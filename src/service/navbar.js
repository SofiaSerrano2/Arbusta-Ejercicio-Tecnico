import axios from 'axios';
const baseUrl = 'http://localhost:3001/navBar';
const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
};
const getNavBar =async ()=>{
	try{
		const response = await axios(baseUrl,options);
		return response.data;
	  }
	  catch{
	  console.log('peticion rechazada');
	}
}

export default { getNavBar};
