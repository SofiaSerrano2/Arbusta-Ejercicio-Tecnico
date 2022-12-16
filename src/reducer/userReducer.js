const initialState = {
  "id":2,
  "name": "Leonel",
  "surname":"Messi",
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
          const changeInfoUser={...state,name:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
        case 'EDIT_SURNAME': 
        {
          const newInfoUser= action.data.surname;
          const changeInfoUser={...state,surname:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
        case 'EDIT_BIRTHDATE':{
          const newInfoUser= action.data.birthDate;
          const changeInfoUser={...state,birthDate:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
        case 'EDIT_EMAIL':{
          const newInfoUser= action.data.email;
          const changeInfoUser={...state,email:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
        case 'EDIT_DNI':{
          const newInfoUser= action.data.dni;
          const changeInfoUser={...state,dni:newInfoUser}
          console.log(changeInfoUser);
          return changeInfoUser;
        }
      default:
        return state
  }
}

export const initialUserDetail = (detail) => {
  return {
    type: 'INIT_USER',
    data: detail,
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


export const editUserSurname = (surname) => {
  return {
    type: 'EDIT_SURNAME',
    data:{ surname}
  }
}

export const editUsertBirthDate = (birthDate) => {
  return {
    type: 'EDIT_BIRTHDATE',
    data:{ birthDate},
  }
}

export const editUserEmail = (email) => {
  return {
    type: 'EDIT_EMAIL',
    data: {email},
  }
}

export const editUserDni = (dni) => {
  return {
    type: 'EDIT_DNI',
    data: {dni},
  }
}


export default userReducer;