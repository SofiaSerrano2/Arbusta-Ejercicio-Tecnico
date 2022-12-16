const initialState = {
  "id":2,
  "name": "Leonel",
  "userName":"Messi",
  "birth_date":"1992-02-02",
  "email":"messi2022@gmail.com",
  "dni":"1465265",
  "driving_license":false,
  "point":103118237387787
}


const userReducer = (state=initialState ) =>{
  return state;
}

export const editUserName = (state=initialState,content) => {
  return {
    type: 'EDIT_NAME',
    data: {
      content
    }
  }
}

export const initialUserDetail = (state=initialState,detail) => {
  return {
    type: 'INIT_USER',
    data: detail,
  }
}

export default userReducer;