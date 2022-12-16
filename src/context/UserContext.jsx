import React,{ useState } from "react"

const Context = React.createContext({}) 

export const UserContextProvider = ({children})=>{
    const [userDetail,setUserDetail]=useState({});
    return <Context.Provider value={{userDetail,setUserDetail}}>
        {children}
    </Context.Provider>
}
export default Context;