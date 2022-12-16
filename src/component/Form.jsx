import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'
//viendo si es mejor hacerlo Componente o ponerlo directamente en la página
//viendo 
const  Form=({title,children})=> {

  return ( 
      <div className="flex flex-col">
      {/*Modificar propiedad sin  */}
        <h1 className="block">{title}</h1>
        <form action="" className="grid gap-x-8 gap-y-4 grid-cols-2">
            {children}
        </form>
      </div>
     );
}

export default Form;