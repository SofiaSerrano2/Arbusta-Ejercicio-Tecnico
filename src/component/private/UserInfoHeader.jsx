const UserInfoHeader=({data})=>{
  return(
    <div>
      <div>
        <p>Mis puntos</p>
      </div>
      <div>
        {data}
        <img src='./assets/icons/menu/icon_avatar_white.svg' alt="" />
      </div>
    </div>
  )
}
export default UserInfoHeader;