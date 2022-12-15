import { useEffect } from "react";
import Form from "../../component/Form";
import serviceUserDetail from "../../service/userDetail"
const UserDetail = () =>{
  useEffect(() => {
    serviceUserDetail
    .getserviceUserDetail()
    .then(userDetail=>console.log(userDetail))
  }, [])

    return(
    <>
      <Form/>
    </>
    )
}

export default UserDetail;