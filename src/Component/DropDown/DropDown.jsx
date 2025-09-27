import { useContext } from 'react'
import style from '../../Component/DropDown/DropDown.module.css'
import { AuthContext } from '../../Context/AuthProvider'
import { Link } from 'react-router'
const DropDown = () => {
  // AuthContext
  const {user,logout } = useContext(AuthContext)

  
  return (
    <div className={style.dropDrown}>
      <p className={style.username}>{user.username}</p>


      <ul className={style.list}>
        <Link to='/myAds' ><li>My Ads</li></Link>
        <li>My Orders</li>
      </ul>
      <div className={style.logout} onClick={logout}>Logout</div>
    </div>
  )
}

export default DropDown