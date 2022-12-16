



const userReducer = (state={},action ) =>{
  switch(action.type){
    case 'INIT_USER':{
      const initInfoUser=action.data;
      console.log(action.data);
      const changeInfoUser=initInfoUser
      return changeInfoUser;
    }
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
        case 'EDIT_LICENSE':{
          const newInfoUser= action.data.license;
          const changeInfoUser={...state,license:newInfoUser}
          return changeInfoUser;
        }
      default:
        return state
  }
}

export const initlUserDetail = (detail) => {
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