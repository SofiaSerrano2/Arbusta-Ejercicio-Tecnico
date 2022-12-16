import axios from 'axios';
import { useState } from 'react';
const baseUrl = 'http://localhost:3001/userDetail/1';
const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  };



export const getserviceUserDetail =async  ()=>{
	try{
		const response = await axios(baseUrl);
    let userDetail= response.data;
    console.log(userDetail);
    console.log('Peticion');
    return userDetail;
  }
  catch{
    console.log('Peticion rechazada');
  }
}

export const putserviceUserDetail =  (object)=>{
  const changeData={...object,name:object.name}
  try{
    const request = axios.put(baseUrl, changeData).then(response => response.data)
  }
  catch{
    console.log('problema peticion');
  }
}


