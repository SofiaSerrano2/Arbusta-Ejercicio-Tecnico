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


const userReducer = (state=initialState,action ) =>{
  switch(action.type){
    case 'EDIT_NAME': 
        {
          const newInfoUser= action.data.name;
          console.log(action.data.name);
          const changeInfoUser={...state,name:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
      
      default:
        return state
  }
}

export const editUserName = (name) => {
  return {
    type: 'EDIT_NAME',
    data: {
      name
    }
  }
}

export const initialUserDetail = (detail) => {
  return {
    type: 'INIT_USER',
    data: detail,
  }
}

export default userReducer;