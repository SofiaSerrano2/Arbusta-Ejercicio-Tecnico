import axios from 'axios';
import { useState } from 'react';
const baseUrl = 'http://localhost:3001/userDetail/1';
const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  };



const getserviceUserDetail =async  ()=>{
	try{
		const response = await axios(baseUrl);
    let userDetail= response.data;
    console.log(userDetail);
    return userDetail;
  }
  catch{
    console.log('Peticion rechazada');
  }
}

const posterviceUserDetail =  (object)=>{
  try{
    const request = axios.post("http://localhost:3001/userDetail/", object)
  return request.then(response => response.data)
  }
  catch{
    console.log('problema peticion');
  }
}


export default { getserviceUserDetail,posterviceUserDetail};
