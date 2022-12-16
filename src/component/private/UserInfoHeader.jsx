const UserInfoHeader=({data})=>{
  return(
    <div className="flex text-white">
      <div>
        <p>Mis puntos</p>
      </div>
      <div className="flex mx-4">
        
        <p>{data}</p>
        <img src='./assets/icons/menu/icon_avatar_white.svg' className=" w-16 h-16" alt="" />
      </div>
    </div>
  )
}
export default UserInfoHeader;