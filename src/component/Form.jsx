import { useEffect } from "react";
// import { useDispatch } from 'react-redux'

import serviceUserDetail from '../service/userDetail'

//viendo si me conviene hacerlo Componente o ponerlo directamente en la página
const  Form=()=> {
  // const dispatch = useDispatch()


  // const editName = (event) => {
  //   event.preventDefault()
  //   const content = event.target.note.value
  //   event.target.note.value = ''
  //   dispatch(editUserName(content))
  // }
  // useEffect(()=>{
  //   serviceUserDetail.getserviceUserDetail.then((detail)=>
  //     store.dispatch
  //   )
  // },[])
  return ( 
      <>
        <h1>Datos Personales</h1>
        <form action="" >
            <input name="name" />
            <button type="submit">add</button>
          </form>
        </>
     );
}

export default Form;